//Servicios tipo get

import { collection, getDocs } from "firebase/firestore";
import { firebaseDB } from "./client";

export const getAllProducts = async () => {
  try {
    const data = await getDocs(collection(firebaseDB, "products"));
    return data?.docs?.map((doc) => ({ ...doc?.data(), id: doc?.id }));
  } catch (error) {
    console.error(error);
  }
};

export const getAllCategories = async () => {
  try {
    const data = await getDocs(collection(firebaseDB, "products"));
    return data?.docs?.map((doc) => ({ ...doc?.data(), id: doc?.id }));
  } catch (error) {
    console.error(error);
  }
};

