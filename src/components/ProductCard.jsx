import React from "react";
import { QuantityButton } from "./QuantityButton";

export const ProductCard = ({ product }) => {
  return (
    <div className="flex bg-slate-400 rounded-lg py justify-between items-center cursor-pointer text-gray-800 font-semibold px-7 active:opacity-75">
      <div className="flex flex-col flex-wrap ">
        <span className="text-3xl opacity-100">{product?.name}</span>
        <span className="text-lg opacity-100 leading-5">
          valor: ${product?.price}
        </span>
      </div>
      <span className="w-12 h-12 rounded-full bg-slate-800 text-4xl grid place-content-center"><span>🌭</span></span>
      <span className="w-12 h-12 rounded-full bg-slate-800 text-4xl grid place-content-center"><span>🧀</span></span>
      <span className="w-12 h-12 rounded-full bg-slate-800 text-4xl grid place-content-center"><span>🥓</span></span>
    </div>
  );
};