import { deleteProductByID, getAllProducts } from "@/firebase/services";
import { useRefreshProductsListFromFB } from "@/hooks/useRefreshProductsListFromFB";
import { setProducts } from "@/redux/productsSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

export const ProductCard2 = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    const productDeleted = await deleteProductByID(id);
    if (productDeleted) {
      successNotify();
      dispatch(setProducts(await getAllProducts()));
      sessionStorage.removeItem("products");
    } else {
      errorNotify();
    }
  };

  const successNotify = () =>
    toast.success("Producto eliminado con éxito!", {
      position: "top-left",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const errorNotify = () =>
    toast.error("No fue posible eliminar el producto", {
      position: "top-left",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  return (
    <div
      className="relative flex flex-col gap-2 bg-t1-blue-200 rounded-lg py-3 justify-between items-center cursor-pointer text-gray-800 font-semibold px-4  w-40 h-40 border border-gray-300"
      onClick={() => {}}
    >
      <div className="flex flex-col gap-2 ">
        <span className="text-2xl opacity-100 text-center leading-none text-gray-50 h-12">
          {product?.name}
        </span>
        <span className="text-lg opacity-100 leading-5 text-center">
          valor: ${product?.price}
        </span>
      </div>
      <span className="w-12 h-12 rounded-full bg-slate-800 text-4xl grid place-content-center">
        <span>{product.logo}</span>
      </span>
      <span className="absolute bottom-0 right-0 w-8 h-8 rounded-ee-md rounded-ss-md bg-t1-gray-100 text-xl grid place-content-center hover:opacity-75">
        <span>✏️</span>
      </span>
      <span
        onClick={() => handleDelete(product.id)}
        className="absolute bottom-0 left-0 w-8 h-8 rounded-se-md rounded-es-md bg-t1-gray-100 text-xl grid place-content-center hover:opacity-75"
      >
        <span>❌</span>
      </span>
      <ToastContainer />
    </div>
  );
};
