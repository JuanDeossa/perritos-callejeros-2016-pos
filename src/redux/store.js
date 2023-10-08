import { configureStore } from "@reduxjs/toolkit";
import modalStatesReducer from "./modalStatesSlice";
import orderDataReducer from "./orderDataSlice";
import productsSlice from "./productsSlice";
import currentPageSlice from "./currentPageSlice";

export const store = configureStore({
  reducer: {
    orderData: orderDataReducer,
    modalStates: modalStatesReducer,
    products: productsSlice,
    currentPage: currentPageSlice,
  },
});
