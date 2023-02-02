import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBimfUFNWSRrYtcBHp6nMAh4n7nk8d6FGM",
    authDomain: "vocalaize-b4c82.firebaseapp.com",
    projectId: "vocalaize-b4c82",
    storageBucket: "vocalaize-b4c82.appspot.com",
    messagingSenderId: "1014270314486",
    appId: "1:1014270314486:web:ad51fb1112432ad479e9d7",
    measurementId: "G-8GK7B6MNXV"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const analytics = getAnalytics(app);
export const db = getFirestore();