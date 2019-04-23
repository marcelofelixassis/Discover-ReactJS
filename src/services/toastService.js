import { toast } from 'react-toastify';

export const notification = (message, type) => {
    switch(type){
        case "success":
            return toast.success(message, {
                position: toast.POSITION.TOP_RIGHT
            });
        case "warn":
            return toast.warn(message, {
                position: toast.POSITION.TOP_RIGHT
            });
        default:
            return toast.error(message, {
                position: toast.POSITION.TOP_RIGHT
            });
    }
};
