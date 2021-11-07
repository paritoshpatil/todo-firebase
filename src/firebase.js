import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJp8UN0FR4Obzf6ap-8hO5IUyz5O1bPSk",
  authDomain: "todo-firebase-f30bc.firebaseapp.com",
  projectId: "todo-firebase-f30bc",
  storageBucket: "todo-firebase-f30bc.appspot.com",
  messagingSenderId: "1023902046306",
  appId: "1:1023902046306:web:77a552fd5ee357ae17993b",
  measurementId: "G-N4SYJ2TF6P",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

