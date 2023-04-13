// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

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

//получить список категорий (коллекция документов).
export const categoryCollection = collection(db, 'categories');
export const productCollection = collection(db, 'products');