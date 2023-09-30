import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.value = [...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProducts } =
  productsSlice.actions;

export default productsSlice.reducer;


// const form = {
//   name:"es un string con max 20 caracteres y minimo 5 y es required",
//   price:"es un numero entero con un valor minimo de 100 y maximo de 500000 y es required",
//   description:"es un string no required",
//   categoryID:"es un numero entero y es required"
// }