import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthenticationConfig = () =>{
    initializeApp(firebaseConfig);
}

export default initializeAuthenticationConfig 