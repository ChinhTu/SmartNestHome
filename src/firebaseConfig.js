// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBunEBHUyv7MEgzmEXmZOfOxzJE22Xo_6Y",
  authDomain: "doan-3f0dd.firebaseapp.com",
  databaseURL: "https://doan-3f0dd-default-rtdb.firebaseio.com",
  projectId: "doan-3f0dd",
  storageBucket: "doan-3f0dd.appspot.com",
  messagingSenderId: "834286697090",
  appId: "1:834286697090:web:e08dc6cbefff1c5ecdd29b",
  measurementId: "G-K5NGSLKH1S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
