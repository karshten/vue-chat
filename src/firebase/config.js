import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyA0HzZdeU27k_Nc41PXyinEC3ZCh_NiqVk",
    // authDomain: "vue-chat-f7d82.firebaseapp.com",
    // projectId: "vue-chat-f7d82",
    // storageBucket: "vue-chat-f7d82.appspot.com",
    // messagingSenderId: "361246025396",
    // appId: "1:361246025396:web:98ca77e927c65d8fbb19e1"
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGEING_SENDER_ID,
    appId: import.meta.env.VITE_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);