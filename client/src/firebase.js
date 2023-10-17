// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "realtor-7388d.firebaseapp.com",
    projectId: "realtor-7388d",
    storageBucket: "realtor-7388d.appspot.com",
    messagingSenderId: "910511579759",
    appId: "1:910511579759:web:aae07bfddb4531b4e9639a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
