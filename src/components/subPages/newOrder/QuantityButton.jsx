import React from "react";
import AddIcon from "@/assets/icons/add_icon.svg";
import SubsIcon from "@/assets/icons/subs_icon.svg";
import { useDispatch } from "react-redux";
import { decrement,increment } from "@/redux/orderDataSlice";



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
    style={{backgroundColor:add?'':''}}
      className={` w-6 h-6 rounded-lg grid place-content-center active:scale-90 text-white hover:opacity-75`}
      onClick={add ? handleSum : handleRes}
    >
      {add ? <AddIcon /> : <SubsIcon />}
    </button>
  );
};