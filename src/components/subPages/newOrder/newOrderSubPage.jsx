"use client";
import React from "react";
import "@/components/subPages/newOrder/orderCart.css";
import { ShoppingCart } from "@/components/subPages/newOrder/shoppingCart";
import { ProductsOrderList } from "@/components/subPages/newOrder/productsOrderList";

export const NewOrderSubPage = () => {
  return (
    <div
      className="NewOrderSubPage pl-10"
      style={{paddingRight:"360px"}}
    >
      <ProductsOrderList/>
      <ShoppingCart/>
    </div>
  );
};