import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: "p1",
      name: "perrito",
      price: 4000,
      units: 1,
    },
    {
      id: "p2",
      name: "coca cola",
      price: 3000,
      units: 1,
    },
  ],
};

export const orderProductsListSlice = createSlice({
  name: "orderProductsList",
  initialState,
  reducers: {
    increment: (state) => {
      console.log("increment");
      // state.value += 1;
    },
    decrement: (state) => {
      console.log("decrement");
      // state.value -= 1;
    },
    deleteItem: (state, action) => {
      console.log("deleteItem");
      // state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, deleteItem } =
  orderProductsListSlice.actions;

export default orderProductsListSlice.reducer;
