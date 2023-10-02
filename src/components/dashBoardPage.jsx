"use client";
import React from "react";
import { Modal1 } from "@/components/modal1";
import { OrderLayout } from "@/components/orderLayout";
import { ProductsList } from "@/components/ProductsList";

export const DashBoardPage = () => {
  return (
    <div id="DashBoardPage" className="w-full px-6">
      <div className="  w-full flex gap-6 justify-between">
        <div>
          <h1 className="white-title">Productos</h1>
          <ProductsList />
        </div>
        <OrderLayout />
      </div>
      <Modal1 />
    </div>
  );
};