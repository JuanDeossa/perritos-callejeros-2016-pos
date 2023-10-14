"use client";
import { DeleteProductModal } from "@/components/subPages/productsPage/deleteProductModal";
import { EditProductModal } from "@/components/subPages/productsPage/editProductModal";
import { NewProductForm } from "@/components/subPages/productsPage/newProductForm";
import { ProductsList } from "@/components/subPages/productsPage/productsList";
import { openModal } from "@/redux/modalStatesSlice";
import { useDispatch } from "react-redux";

export const ProductsSubPage = () => {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal(""));
  };

  return (
    <div
      className="ProductsPage w-full h-full flex flex-col gap-6 px-4"
      onClick={handleOpenModal}
    >
      <button className="w-fit bg-jt1-green1 rounded-xl px-4 py-2 text-gray-300 font-semibold hover:opacity-80">
        Agregar nuevo producto
      </button>
      <ProductsList />
      {/* <NewProductForm /> */}
      <DeleteProductModal />
      <EditProductModal />
    </div>
  );
};