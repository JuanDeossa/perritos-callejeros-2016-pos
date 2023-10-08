"use client";
import React from "react";
import "@/components/orderCart.css";
import { ProductsList } from "@/components/ProductsList";
import { ShoppingCart } from "@/components/shoppingCart";
import { ProductsOrderList } from "@/components/productsOrderList";

export const NewOrderSubPage = () => {
  return (
    <div
      className="NewOrderSubPage pl-10"
      style={{paddingRight:"360px"}}
    >
      <ProductsOrderList/>
      <ShoppingCart/>
      {/* <ProductsList /> */}
      {/* <div className="OrderCart bg-white flex flex-col">
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
        <span>product1</span>
      </div> */}
      {/* <ProductsOrderList/> */}
      {/* <div className="w-full">
        <div>
          <h1 className="white-title">Productos</h1>
        </div>
        <OrderLayout />
      </div> */}
    </div>
  );
};
