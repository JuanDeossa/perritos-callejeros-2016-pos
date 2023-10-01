import { increment, addNew } from "@/redux/orderProductsSlice";
import React from "react";
import { useDispatch } from "react-redux";

export const ProductCard2 = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="relative flex flex-col gap-2 bg-slate-400 rounded-lg py-3 justify-between items-center cursor-pointer text-gray-800 font-semibold px-4 active:opacity-75 w-40 h-40"
      onClick={() => dispatch(addNew(product))}
    >
      <div className="flex flex-col gap-2 ">
        <span className="text-2xl opacity-100 text-center leading-none">
          {product?.name}
        </span>
        <span className="text-lg opacity-100 leading-5 text-center">
          valor: ${product?.price}
        </span>
      </div>
      <span className="w-12 h-12 rounded-full bg-slate-800 text-4xl grid place-content-center">
        <span>{product.logo}</span>
      </span>
      <span className="absolute bottom-0 right-0 w-8 h-8 rounded-ee-md rounded-ss-md bg-slate-950 text-xl grid place-content-center">
        <span>✏️</span>
      </span>
    </div>
  );
};
