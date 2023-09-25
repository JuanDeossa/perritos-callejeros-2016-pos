// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "perritos-callejeros-2016.firebaseapp.com",
  projectId: "perritos-callejeros-2016",
  storageBucket: "perritos-callejeros-2016.appspot.com",
  messagingSenderId: "1014776582844",
  appId: "1:1014776582844:web:5a1b3390b1dfb65a6936b9",
  measurementId: "G-BCL01WT4S2"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(firebaseApp);


export const getAllProducts = async()=>{
  try {
    const data = await getDocs(collection(firebaseDB,"products"))
    return data?.docs?.map(doc=>({...doc?.data(),id:doc?.id}))
  } catch (error) {
    console.error(error);
  }
}