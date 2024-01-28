// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyBhlsTIXSCqk2tz44metHbQyD_vGan25qw",
    authDomain: "hotel-booking-react-9799e.firebaseapp.com",
    databaseURL:
        "https://hotel-booking-react-9799e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "hotel-booking-react-9799e",
    storageBucket: "hotel-booking-react-9799e.appspot.com",
    messagingSenderId: "955388546917",
    appId: "1:955388546917:web:f13bcde3e1dd3e2e4a9b8c",
    measurementId: "G-R3NN2G282E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
