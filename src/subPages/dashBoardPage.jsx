"use client";
import React from "react";
import { DeleteProductModal } from "@/components/deleteProductModal";
import { OrderLayout } from "@/components/orderLayout";
import { ProductsList } from "@/components/ProductsList";

export const DashBoardPage = () => {
  return (
    <div className="DashBoardPage w-full px-6">
      <div className="w-full flex gap-6 justify-between">
        <div>
          <h1 className="white-title">Productos</h1>
          <ProductsList />
        </div>
        <OrderLayout />
      </div>
    </div>
  );
};