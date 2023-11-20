// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk5kDeiz32d6ZbeVgJtWoiQ0g2TwRVsLk",
  authDomain: "collage-jobs.firebaseapp.com",
  projectId: "collage-jobs",
  storageBucket: "collage-jobs.appspot.com",
  messagingSenderId: "886510450396",
  appId: "1:886510450396:web:4cbbb8d1abc561d687e619",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
