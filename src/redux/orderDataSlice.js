import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    productsList: [],
    total: 0,
  },
};

export const orderDataSlice = createSlice({
  name: "orderData",
  initialState,
  reducers: {
    // updateTotal: (state, action) => {
    //   state.value.total = state.value.productsList.reduce((acc, curr) => {
    //     return curr.units * curr.price + acc;
    //   }, 0);
    // },
    addNew: (state, action) => {
      // console.log(state.value);
      const id = action.payload.id;
      const objFound = state.value.productsList.some((prod) => prod.id === id);
      if (objFound) {
        state.value.productsList = state.value.productsList.map((prod) => {
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
        state.value.productsList.push({
          ...action.payload,
          units: 1,
        });
      }
      state.value.total = state.value.productsList.reduce((acc, curr) => {
        return curr.units * curr.price + acc;
      }, 0);
    },
    increment: (state, action) => {
      const { payload: id } = action;
      // console.log(id);
      state.value.productsList = state.value.productsList.map((prod) => {
        if (prod.id === id) {
          return {
            ...prod,
            units: prod.units + 1,
          };
        } else {
          return prod;
        }
      });
      state.value.total = state.value.productsList.reduce((acc, curr) => {
        return curr.units * curr.price + acc;
      }, 0);
    },
    decrement: (state, action) => {
      const { payload: id } = action;
      state.value.productsList = state.value.productsList
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
        state.value.total = state.value.productsList.reduce((acc, curr) => {
          return curr.units * curr.price + acc;
        }, 0);
    },
    deleteItem: (state, action) => {
      const { payload: id } = action;
      state.value.productsList = state.value.productsList.filter(
        (prod) => prod.id !== id
      );
      state.value.total = state.value.productsList.reduce((acc, curr) => {
        return curr.units * curr.price + acc;
      }, 0);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, deleteItem, addNew, updateTotal } =
  orderDataSlice.actions;

export default orderDataSlice.reducer;
