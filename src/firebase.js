// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY9Wa0vEjIn27-rc-ePf0rxr5zgk7FL0s",
  authDomain: "diploma-b7671.firebaseapp.com",
  projectId: "diploma-b7671",
  storageBucket: "diploma-b7671.appspot.com",
  messagingSenderId: "662195838615",
  appId: "1:662195838615:web:3a37ab99611d6d927293d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

//получить список категорий (коллекция документов).
export const categoryCollection = collection(db, 'categories');
export const productCollection = collection(db, 'products');



const provider = new GoogleAuthProvider();
export const logIn = () => signInWithPopup(auth, provider);
export const logOut = () => signOut(auth);
export const onAuthChange = (callback) = onAuthStateChanged(auth, callback);
