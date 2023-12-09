// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZGpyLq1wRJnKgYnKTqKaQ637olA4_ywM",
  authDomain: "college-jobs.firebaseapp.com",
  projectId: "college-jobs",
  storageBucket: "college-jobs.appspot.com",
  messagingSenderId: "376851561376",
  appId: "1:376851561376:web:cc649a44433a0d5993c2c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
