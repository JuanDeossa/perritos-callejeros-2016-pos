import React, { useState } from "react";

import {  useSelector } from 'react-redux'
import { OrderProdcutCard } from "./OrderProdcutCard";

export const OrderLayout = () => {
  const [carProdcts, setCarProdcts] = useState([
    {
      id: 1,
      name: "perrito",
      price: 4000,
      units: 2,
    },
    {
      id: 2,
      name: "coca cola",
      price: 3000,
      units: 2,
    },
  ]);

  const count = useSelector((state) => state.counter.value)
  const count2 = useSelector((state) => state.counter2.value)

  return (
    <div className="min-h-[400px] border border-white text-5xl text-white flex flex-col gap-4 p-4 justify-between">
    <div className="flex flex-col gap-3">
      {carProdcts?.map((prod) => (
        <OrderProdcutCard key={prod?.id} prod={prod} />
      ))}
    </div>
      <div className="text-4xl">
        <span className=" text-white">{"Total: "}</span>
        <span className=" text-white">{"$20.000"}</span>
      </div>
    </div>
  );
};
