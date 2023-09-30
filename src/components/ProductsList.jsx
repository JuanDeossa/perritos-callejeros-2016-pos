"use client";
import { auth, getAllProducts } from "@/firebase/client";
import React, { useEffect, useState } from "react";
import { ProductCard } from "./productCard";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "@/redux/productsSlice";
import { useSessionStorage } from "@/hooks/useSessionStorage";

export const ProductsList = () => {
  const dispatch = useDispatch();
  const productsFromStore = useSelector((state) => state.products.value);
  const [productsAlrready, setProductsAlrready] = useSessionStorage(
    "products",
    []
  );
  // const orden = useSelector((state) => state.orderProductsList.value);

  const updateAllProducts = async () => {
    dispatch(setProducts(await getAllProducts()));
    setProductsAlrready(await getAllProducts());
  };
  // useEffect(() => {
  //   console.log('cambio la orden');
  // }, [orden]);
  useEffect(() => {
    const OK = productsAlrready.length;
    if (OK) {
      dispatch(setProducts(productsAlrready));
    } else {
      updateAllProducts();
    }
  }, []);
  return (
    <div className="flex flex-col gap-5 my-8">
      {productsFromStore?.map((product) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </div>
  );
};
