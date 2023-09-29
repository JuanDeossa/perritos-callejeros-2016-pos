// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
  measurementId: "G-BCL01WT4S2",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(firebaseApp);
export const auth = getAuth();

export const getAllProducts = async () => {
  try {
    const data = await getDocs(collection(firebaseDB, "products"));
    // console.log('Estoy aca');
    return data?.docs?.map((doc) => ({ ...doc?.data(), id: doc?.id }));
  } catch (error) {
    console.error(error);
  }
};

export const updateProductByID = async (prodId) => {
  // try {
  //   const productref = doc(firebaseDB, "products", prodId);
  //   await updateDoc(productref, {
  //     pricess: 21000,
  //   });
  //   console.log('updated');
  // } catch (error) {
  //   console.error(error);
  // }
};

// import { doc, updateDoc } from "firebase/firestore";
// const washingtonRef = doc(db, "cities", "DC");
// // Set the "capital" field of the city 'DC'
// await updateDoc(washingtonRef, {
//   capital: true
// });

export const loginAction = async ({ email, password }) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      if (user) {
        console.log("Login succesfull");
        // window.location.href=routes.DASHBOARD
      }
    })
    .catch((error) => {
      console.error("signInWithEmailAndPassword:", error);
    });
};

export const logoutAction = async () => {
  signOut(auth)
    .then(() => {
      console.log("LogOut succesfull");
      // window.location.href=routes.HOME
    })
    .catch((error) => {
      console.error("signOut:", error);
    });
};

/*

rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}

rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    // Permite a los usuarios autenticados leer los documentos en la colección "products"
    match /products/{document=**} {
      allow read,update,write,delete: if request.auth != null;
    }
  }
}

*/
