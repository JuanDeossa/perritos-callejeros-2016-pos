"use client";
import { Modal1 } from "@/components/Modal1";
import { Modal2 } from "@/components/Modal2";
import { NewProductForm } from "@/components/newProductForm";
import { ProductsList2 } from "@/components/productsList2";

export const ProductsPage = () => {
  return (
    <div className="ProductsPage w-full h-full flex gap-6 px-4">
      <NewProductForm />
      <ProductsList2 />
      <Modal1 />
      <Modal2 />
    </div>
  );
};