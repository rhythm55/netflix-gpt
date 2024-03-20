// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaiDHmD9F7LR_ThvRIP30RaR_8b6guSTk",
  authDomain: "netflixgpt-111.firebaseapp.com",
  projectId: "netflixgpt-111",
  storageBucket: "netflixgpt-111.appspot.com",
  messagingSenderId: "960591588937",
  appId: "1:960591588937:web:1e3c159994f24f9ec49998",
  measurementId: "G-377R223WS5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
