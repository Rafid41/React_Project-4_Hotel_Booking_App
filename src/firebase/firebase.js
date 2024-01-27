// src\firebase\firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUp5sxjU5pF7T0Ub2YAR4Mv_I_xnqDTNo",
  authDomain: "react-hotel-booking-app.firebaseapp.com",
  databaseURL: "https://react-hotel-booking-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-hotel-booking-app",
  storageBucket: "react-hotel-booking-app.appspot.com",
  messagingSenderId: "366408645792",
  appId: "1:366408645792:web:5be0972cf850de9dee1dc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// realtime database
export const database = getDatabase(app);