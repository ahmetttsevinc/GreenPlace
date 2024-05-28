// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "greenplace-b2c3d.firebaseapp.com",
  projectId: "greenplace-b2c3d",
  storageBucket: "greenplace-b2c3d.appspot.com",
  messagingSenderId: "1028785122147",
  appId: "1:1028785122147:web:14e45c4a2cfddcd78e8156",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
