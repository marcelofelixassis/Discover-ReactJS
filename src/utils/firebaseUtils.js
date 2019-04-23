import AuthService from '../services/authService';
import { notification } from '../services/toastService';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

export const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/register',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: (authResult) => {
        AuthService.userRegisterMoreInfos(authResult.user.displayName, authResult.user.uid).catch(() => {
          notification("Error! Try again later", 'error');
        });
      }
    }
};

export const firebaseFireStore = firebase.firestore();
export const firebaseAuth = firebase.auth();
