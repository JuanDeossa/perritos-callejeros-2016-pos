import React from "react";
import AddIcon from "@/assets/icons/add_icon.svg";
import SbusIcon from "@/assets/icons/subs_icon.svg";

export const QuantityButton = ({ add = true, id }) => {
  const handleSum = () => {
    console.log("Sum, id: ", id);
  };
  const handleRes = () => {
    console.log("Res, id: ", id);
  };

  return (
    <button
      className={`bg-red-600 ${
        add && "bg-green-600"
      } w-8 h-8 rounded-lg grid place-content-center active:scale-90`}
      onClick={add ? handleSum : handleRes}
    >
      {add ? <AddIcon /> : <SbusIcon />}
    </button>
  );
};
