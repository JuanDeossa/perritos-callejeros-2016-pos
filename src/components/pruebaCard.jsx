import Image from "next/image";
import React from "react";
import img from "/src/assets/images/manzana.jpg"
import { addNew } from "@/redux/orderProductsSlice";
import { useDispatch } from "react-redux";

export const PruebaCard = ({product}) => {

  const dispatch=useDispatch()

  return (
    <div
      className="w-32 max-w-sm bg-slate-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2"
      onClick={()=>dispatch(addNew(product))}
    >
      <a href="#">
        <Image
          className="rounded-full bg-slate-600"
          src={img}
          alt="product image"
        />
      </a>
      <div className="">
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white whitespace-nowrap overflow-hidden">
            {product.name}
          </h5>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          {/* <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a> */}
        </div>
      </div>
    </div>
  );
};
