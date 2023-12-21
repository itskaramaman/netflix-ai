// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn4Ohm81XDjtXXpSE2FdiekT4he64Xrvs",
  authDomain: "netlfix-ai.firebaseapp.com",
  projectId: "netlfix-ai",
  storageBucket: "netlfix-ai.appspot.com",
  messagingSenderId: "569269340648",
  appId: "1:569269340648:web:3652ee1f7ac0b25a56fc5d",
  measurementId: "G-Q1JZ0MJDN9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
