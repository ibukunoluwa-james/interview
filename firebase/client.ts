// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB22EX19rA0GQibJo-ObuyzmiBLxkA5AVo",
  authDomain: "prep-c09a9.firebaseapp.com",
  projectId: "prep-c09a9",
  storageBucket: "prep-c09a9.firebasestorage.app",
  messagingSenderId: "471758428590",
  appId: "1:471758428590:web:d93dd8c7556c0ebfff503f",
  measurementId: "G-GEMWKY116C"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app)