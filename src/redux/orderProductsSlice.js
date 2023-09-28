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
    increment: (state, action) => {
      const { payload: id } = action;
      console.log(id);
      state.value = state.value.map((prod) => {
        if (prod.id === id) {
          return {
            ...prod,
            units: prod.units + 1,
          };
        } else {
          return prod;
        }
      });
    },
    decrement: (state, action) => {
      const { payload: id } = action;
      state.value = state.value
        .map((prod) => {
          if (prod?.id === id) {
            if (prod?.units <= 1) {
              return;
            }
            return {
              ...prod,
              units: prod.units - 1,
            };
          } else {
            return prod;
          }
        })
        .filter((prod) => !!prod);
    },
    deleteItem: (state, action) => {
      const { payload: id } = action;
      state.value = state.value.filter((prod) => prod.id !== id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, deleteItem } =
  orderProductsListSlice.actions;

export default orderProductsListSlice.reducer;
