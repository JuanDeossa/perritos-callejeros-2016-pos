"use client";
import React from "react";
import { ShoppingCart } from "@/components/subPages/shoppingCart/shoppingCart";
import { ProductsOrderList } from "@/components/subPages/newOrder/productsOrderList";

export const NewOrderSubPage = () => {
  return (
    <div className="NewOrderSubPage pl-10" style={{ paddingRight: "360px" }}>
      <ProductsOrderList />
      <ShoppingCart />
    </div>
  );
};