import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./client";

export const loginAction = async ({ email, password }) => {
  console.log(email);
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