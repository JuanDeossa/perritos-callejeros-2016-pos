"use client";
import { DeleteProductModal } from "@/components/subPages/productsPage/deleteProductModal";
import { EditProductModal } from "@/components/subPages/productsPage/editProductModal";
import { NewProductForm } from "@/components/subPages/productsPage/newProductForm";
import { ProductsList2 } from "@/components/subPages/productsPage/productsList2";

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