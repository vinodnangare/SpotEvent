// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYqDP7rZ-BAqvnkg7sunsY-ciXJKgDsqQ",
  authDomain: "spotevents-d0787.firebaseapp.com",
  projectId: "spotevents-d0787",
  storageBucket: "spotevents-d0787.appspot.com", // corrected `.app` → `.appspot.com`
  messagingSenderId: "1098282968984",
  appId: "1:1098282968984:web:bac13640f298ef5e47aded",
  measurementId: "G-PQDLXMK13D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase services to use in your project
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
