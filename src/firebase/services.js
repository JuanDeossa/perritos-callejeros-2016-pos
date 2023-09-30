//Servicios tipo get

import { addDoc, collection, getDocs } from "firebase/firestore";
import { firebaseDB } from "./client";

export const getAllProducts = async () => {
  try {
    const data = await getDocs(collection(firebaseDB, "products"));
    return data?.docs?.map((doc) => ({ ...doc?.data(), id: doc?.id }));
  } catch (error) {
    console.error("getAllProducts: ", error);
  }
};

export const getAllCategories = async () => {
  try {
    const data = await getDocs(collection(firebaseDB, "categories"));
    return data?.docs?.map((doc) => ({ ...doc?.data(), id: doc?.id }));
  } catch (error) {
    console.error("getAllCategories_error: ", error);
  }
};

export const addNewProduct = async ({
  name,
  price,
  description,
  category_id,
  logo = "🍴",
}) => {
  try {
    const res = await addDoc(collection(firebaseDB, "products"), {
      name,
      price,
      description,
      category_id,
      logo,
    })
  } catch (error) {
    console.error("addNewProduct_error: ", error);
  }
};