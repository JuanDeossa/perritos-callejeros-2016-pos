import React from "react";
import { PruebCard, PruebaCard } from "./pruebaCard";
import { useSelector } from "react-redux";

export const ProductsOrderList = () => {
  const productsFromStore = useSelector((state) => state.products.value);

  return (
    <div className="ProductsOrderList flex flex-wrap gap-3 max-w-6xl min-w-min pb-6 mx-auto">
      {productsFromStore.map((product) => (
        <PruebaCard key={product.id} product={product}/>
      ))}
    </div>
  );
};