// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "perritos-callejeros-2016.firebaseapp.com",
  projectId: "perritos-callejeros-2016",
  storageBucket: "perritos-callejeros-2016.appspot.com",
  messagingSenderId: "1014776582844",
  appId: "1:1014776582844:web:5a1b3390b1dfb65a6936b9",
  measurementId: "G-BCL01WT4S2",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(firebaseApp);
export const auth = getAuth();
