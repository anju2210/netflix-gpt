// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnDFlYDW9JWoulYIg_5mWVPtkTJRass8A",
  authDomain: "netflixgpt-d9839.firebaseapp.com",
  projectId: "netflixgpt-d9839",
  storageBucket: "netflixgpt-d9839.appspot.com",
  messagingSenderId: "65557732644",
  appId: "1:65557732644:web:a127a4d2f9f645f74f67b1",
  measurementId: "G-4JMEJFCGP8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
