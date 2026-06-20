import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/slice"
import productSlice from '../slice/productslice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    product: productSlice
  },
});
