"use client";
import { getAllProducts } from "@/firebase/services";
import React, { useEffect } from "react";
import { ProductCard } from "./productCard";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "@/redux/productsSlice";
import { useSessionStorage } from "@/hooks/useSessionStorage";

export const ProductsList = () => {
  const dispatch = useDispatch();
  const productsFromStore = useSelector((state) => state.products.value);
  const [productsFSS, setProductsFSS] = useSessionStorage(
    "products",
    []
  );
  // const orden = useSelector((state) => state.orderProductsList.value);

  const updateAllProducts = async () => {
    const productsFromAPI=await getAllProducts()
    dispatch(setProducts(productsFromAPI));
    setProductsFSS(productsFromAPI);
  };
  // useEffect(() => {
  //   console.log('cambio la orden');
  // }, [orden]);
  useEffect(() => {
    const productsAlreadyExists = productsFSS.length;
    if (productsAlreadyExists) {
      dispatch(setProducts(productsFSS));
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