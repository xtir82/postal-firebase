// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIRESTORE_API_KEY,
    authDomain: "postal-5ff82.firebaseapp.com",
    projectId: "postal-5ff82",
    storageBucket: "postal-5ff82.firebasestorage.app",
    messagingSenderId: "273862402892",
    appId: "1:273862402892:web:8df8fa31e17fc2753325e9",
    measurementId: "G-X19R0ZJZR9"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);