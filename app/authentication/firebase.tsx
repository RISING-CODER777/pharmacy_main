// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPxX0q3GiB2m2Q1l6xMWw1rBkpUofDE2c",
  authDomain: "reviews-565f8.firebaseapp.com",
  projectId: "reviews-565f8",
  storageBucket: "reviews-565f8.appspot.com",
  messagingSenderId: "152230198846",
  appId: "1:152230198846:web:ac21ab943af1552db31b6f",
  measurementId: "G-C1MRGMDYF0"
};


// Initialize Firebase
const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db }
