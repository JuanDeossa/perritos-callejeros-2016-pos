"use client";
import { getAllProducts } from "@/firebase/services";
import React, { useEffect } from "react";
import { ProductCard } from "./productCard";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "@/redux/productsSlice";
import { useSessionStorage } from "@/hooks/useSessionStorage";
import { ProductCar2, ProductCard2 } from "./productCard2";

export const ProductsList2 = () => {
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
  useEffect(() => {
    const productsAlreadyExists = productsFSS.length;
    if (productsAlreadyExists) {
      dispatch(setProducts(productsFSS));
    } else {
      updateAllProducts();
    }
  }, []);
  useEffect(() => {
    console.log("Cambio la tienda");
  }, [productsFromStore]);
  return (
    <div id="ProductsList" className="flex flex-wrap gap-5 h-fit">
      {productsFromStore?.map((product) => (
        <ProductCard2 key={product?.id} product={product} />
      ))}
    </div>
  );
};