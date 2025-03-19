import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import Firebase from "firebase";
import "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL, // Added database URL
};

firebase.initializeApp(firebaseConfig);
// Initialize Firebase services
const firebase=firebase.initializeApp(firebaseConfig); 
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const realtimeDb = getDatabase(app); // Initialize Realtime Database

export { firebase, db, auth, storage, realtimeDb }; // Export the database instance
