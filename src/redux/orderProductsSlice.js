import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
  ],
};

export const orderProductsListSlice = createSlice({
  name: "orderProductsList",
  initialState,
  reducers: {
    addNew: (state, action) => {
      const id = action.payload.id;
      const objFound = state.value.some((prod) => prod.id === id);
      if (objFound) {
        state.value = state.value.map((prod) => {
          if (prod.id === id) {
            // console.log("repetido");
            return {
              ...prod,
              units: prod.units + 1,
            };
          } else {
            return prod;
          }
        });
      } else {
        state.value.push({
          ...action.payload,
          units: 1,
        });
      }
    },
    increment: (state, action) => {
      const { payload: id } = action;
      // console.log(id);
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
export const { increment, decrement, deleteItem, addNew } =
  orderProductsListSlice.actions;

export default orderProductsListSlice.reducer;
