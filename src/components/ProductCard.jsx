import { increment,addNew } from "@/redux/orderProductsSlice";
import React from "react";
import { useDispatch } from "react-redux";


export const ProductCard = ({ product }) => {
  const dispatch=useDispatch()
  return (
    <div
      className=""
      onClick={()=>dispatch(addNew(product))}
    >
      <div className="ProductCard">
        <span className="text-3xl opacity-100">{product?.name}</span>
        <span className="text-lg opacity-100 leading-5">
          valor: ${product?.price}
        </span>
      </div>
      <span className="w-12 h-12 rounded-full bg-slate-800 text-4xl grid place-content-center"><span>{product.logo}</span></span>
    </div>
  );
};