import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "@/redux/orderDataSlice";
import { MinusIcon, PlusIcon } from "@/components/common/iconsProvider";

export const QuantityButton = ({ add = true, id }) => {
  const dispatch = useDispatch();
  const handleSum = () => {
    // console.log("Sum, id: ", id);
    dispatch(increment(id));
  };
  const handleRes = () => {
    // console.log("Res, id: ", id);
    dispatch(decrement(id));
  };

  return (
    <button
      style={{ backgroundColor: add ? "" : "" }}
      className={` w-6 h-6 rounded-lg grid place-content-center active:scale-90 text-white hover:opacity-75`}
      onClick={add ? handleSum : handleRes}
    >
      {add ? <PlusIcon /> : <MinusIcon />}
    </button>
  );
};