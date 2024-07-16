// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9x1xUgseacWrpNXCqTyYCwnGUbR5muls",
    authDomain: "database-74ca9.firebaseapp.com",
    projectId: "database-74ca9",
    storageBucket: "database-74ca9.appspot.com",
    messagingSenderId: "790696147548",
    appId: "1:790696147548:web:072ccc5d6d9f5441ac0499",
    measurementId: "G-2V57D3E1L5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage }
