//Servicios tipo get

import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
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
    });
    if (res.id) {
      return true;
    }
  } catch (error) {
    console.error("addNewProduct_error: ", error);
  }
};

export const deleteProductByID = async (id) => {
  try {
    await deleteDoc(doc(firebaseDB, "products", id));
    return true
  } catch (error) {
    console.error("Error al eliminar el documento: ", error);
    return false
  }
};

export const editProductByID = async ({id,data}) => {
  try {
    await updateDoc(doc(firebaseDB, "products", id), {
      name: data.name,
      price: data.price,
      description: data.description,
      category_id: data.category_id,
    }).then(res=>console.log(res))
    return true
  } catch (error) {
    console.error("Error al eliminar el documento: ", error);
    return false
  }
};

