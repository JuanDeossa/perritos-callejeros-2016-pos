import React from "react";
import AddIcon from "@/assets/icons/add_icon.svg";
import SbusIcon from "@/assets/icons/subs_icon.svg";
import { useDispatch } from "react-redux";
import { decrement, deleteItem, increment } from "@/redux/orderProductsSlice";



export const QuantityButton = ({ add = true, id }) => {
  const dispatch=useDispatch()
  const handleSum = () => {
    // console.log("Sum, id: ", id);
    dispatch(increment(id))
  };
  const handleRes = () => {
    // console.log("Res, id: ", id);
    dispatch(decrement(id))
  };

  return (
    <button
    style={{backgroundColor:add?'green':'red'}}   
      className={` w-8 h-8 rounded-lg grid place-content-center active:scale-90`}
      onClick={add ? handleSum : handleRes}
    >
      {add ? <AddIcon /> : <SbusIcon />}
    </button>
  );
};
