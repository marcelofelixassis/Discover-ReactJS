import { firebaseAuth, firebaseFireStore } from '../utils/firebaseUtils';

export default class AuthService {
    static userIsLogged = () => {
        return true;
    }

    static currentUser = () => {
        let user = firebaseAuth.currentUser;
        return user;
    }

    static userRegister = async (user) => {
        const { email, password } = user;
        return await firebaseAuth.createUserWithEmailAndPassword(email, password);
    }

    static userRegisterMoreInfos = async (name, uid) => {
        await firebaseFireStore.collection('users').where("uid", "==", uid).get().then( async (querySnapshot) => {
            if(querySnapshot.empty) {
                return await firebaseFireStore.collection('users').add({
                    name,
                    uid,
                    createdAt: new Date(),
                });
            }else {
                querySnapshot.forEach(async (document) => {
                    return await firebaseFireStore.doc('users/'+document.id).set({
                        name,
                    }, { merge: true });
                });
            }
        });
    }
}