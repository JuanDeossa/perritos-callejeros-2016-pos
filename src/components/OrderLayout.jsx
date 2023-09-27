import React, { useState } from "react";

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
  return (
    <div className="min-h-[400px] border border-white text-5xl text-white flex flex-col gap-4 p-8">
      OrderLayout
      {carProdcts?.map((prod) => (
        <div key={prod?.id} className="flex flex-col gap-2 text-2xl">
          <span>{prod?.name}</span>
          <span>{prod?.price}</span>
          <span>{prod?.units}</span>
        </div>
      ))}
    </div>
  );
};
