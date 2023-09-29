import { updateProductByID } from "@/firebase/client";
import { increment, addNew } from "@/redux/orderProductsSlice";
import React from "react";
import { useDispatch } from "react-redux";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleEdit = ({e,id}) => {
    e.stopPropagation()
    updateProductByID(id);
  };

  return (
    <div
      className="flex bg-slate-400 rounded-lg py-2 justify-between items-center cursor-pointer text-gray-800 font-semibold px-4 active:opacity-75 gap-3"
      onClick={() => dispatch(addNew(product))}
    >
      <div className="flex flex-col flex-wrap ">
        <span className="text-3xl opacity-100">{product?.name}</span>
        <span className="text-lg opacity-100 leading-5">
          valor: ${product?.price}
        </span>
      </div>
      <span className="w-12 h-12 rounded-full bg-slate-800 text-4xl grid place-content-center">
        <span>{product.logo}</span>
      </span>
      <span
        className="w-12 h-12 rounded-full bg-slate-800 text-4xl grid place-content-center bg-white"
        onClick={(e) => handleEdit({e,id:product.id})}
      >
        <span>📝</span>
      </span>
    </div>
  );
};
