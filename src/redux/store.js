import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import counterReducer2 from './counterSlice2'

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    counter2:counterReducer2,
  },
});
