// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBerf0sqk1sCgTQtnpNhCcyDiw-pl9PA74",
  authDomain: "netflixgpt-46494.firebaseapp.com",
  projectId: "netflixgpt-46494",
  storageBucket: "netflixgpt-46494.firebasestorage.app",
  messagingSenderId: "663722998963",
  appId: "1:663722998963:web:dfbcc808980227745984c6",
  measurementId: "G-1W7E620VL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);