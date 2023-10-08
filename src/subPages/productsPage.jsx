"use client";
import { DeleteProductModal } from "@/components/deleteProductModal";
import { EditProductModal } from "@/components/editProductModal";
import { NewProductForm } from "@/components/newProductForm";
import { ProductsList2 } from "@/components/productsList2";

export const ProductsSubPage = () => {
  return (
    <div className="ProductsPage w-full h-full flex gap-6 px-4">
      <ProductsList2 />
      {/* <NewProductForm /> */}
      <DeleteProductModal />
      <EditProductModal />
    </div>
  );
};