import { configureStore } from "@reduxjs/toolkit";
import modalStatesReducer from "./modalStatesSlice";
import orderProductsReducer from "./orderProductsSlice";
import productsSlice from "./productsSlice";
import currentPageSlice from "./currentPageSlice";

export const store = configureStore({
  reducer: {
    orderProductsList: orderProductsReducer,
    modalStates: modalStatesReducer,
    products:productsSlice,
    currentPage:currentPageSlice,
  },
});
