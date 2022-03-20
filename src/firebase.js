
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDH6mK8xA7DvaTbF-b8Spr7xFy1T-KCMYw",
  authDomain: "todo-e2cb6.firebaseapp.com",
  projectId: "todo-e2cb6",
  storageBucket: "todo-e2cb6.appspot.com",
  messagingSenderId: "287926663002",
  appId: "1:287926663002:web:0ae221a9d0850e0348e563",
  measurementId: "G-8EQZFRG5YV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}