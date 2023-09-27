import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import orderProductsReducer from "./orderProductsSlice";

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    orderProductsList:orderProductsReducer,
  },
});