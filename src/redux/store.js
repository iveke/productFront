import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./ProductSlice.js";

export const store = configureStore({
  reducer: { product: productReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
