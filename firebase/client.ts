// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwIEpwbLBDwdwaSxl18-X4nNDkXvQse6Y",
  authDomain: "mockwiser.firebaseapp.com",
  projectId: "mockwiser",
  storageBucket: "mockwiser.firebasestorage.app",
  messagingSenderId: "200489760640",
  appId: "1:200489760640:web:65134b7bf0b433ce5bf365",
  measurementId: "G-W5VH1SXKCQ",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
