// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB77apcAjfDk_mNVTd8UIQsnN13HQRC28E",
  authDomain: "real-chat-app-ec5c7.firebaseapp.com",
  projectId: "real-chat-app-ec5c7",
  storageBucket: "real-chat-app-ec5c7.appspot.com",
  messagingSenderId: "449472506601",
  appId: "1:449472506601:web:4aa995c3b0bd944163de78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app)
