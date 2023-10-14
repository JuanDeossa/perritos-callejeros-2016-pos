import Image from "next/image";
import React from "react";
// const placeHolderImage =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhHdTfhfIc7IS-BNQ20hLa_nF7pq2duHCeuBkqYikInFLoeAEERUAlzRd38xZWj2KTu8&usqp=CAU";
const placeHolderImage =
  "https://universalele.websites.co.in/obaju-turquoise/img/product-placeholder.png";
import { addNew } from "@/redux/orderDataSlice";
import { useDispatch } from "react-redux";
import { getFormatoCOP } from "@/utils";

export const ProductCard = ({ product, children }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="ProductCard w-32 max-w-sm bg-jt1-gray3 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 active:opacity-75 hover:opacity-90 cursor-pointer"
      onClick={() => {
        dispatch(addNew(product));
        // dispatch(updateTotal());
      }}
    >
      {/* <Image
          className="rounded-full bg-slate-600"
          src={"https://www.capitalfoodservices.com/wp-content/uploads/2019/12/Postobon_Manzana_Lata_355mL.jpg"}
          alt="product image"
          width={200}
          height={200}
        /> */}
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img
        alt="imagen del producto"
        src={product?.image?.url || placeHolderImage}
        className="rounded-full bg-slate-100 w-full aspect-square bg-cover bg-center"
      />
      <div className="">
        <a href="#">
          <h5
            title={product.name}
            className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2 h-14"
          >
            {product.name}
          </h5>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${getFormatoCOP(product.price)}
          </span>
        </div>
      </div>
      {children}
    </div>
  );
};
