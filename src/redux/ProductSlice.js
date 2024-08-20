import { createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  deleteProduct,
  getProductList,
  updateProduct,
} from "./operation.js";

const productSlice = createSlice({
  name: "product",
  initialState: {
    list: [],
    createProduct: {name: "", price: 0, description: ""},
    changeProduct: { id: "", name: "", price: "", description: "" },
    changing: false,
  },
  reducers: {
    changeInfo(state, action) {
      return { ...state, changeProduct: action.payload, changing:true };
    },
    changingSwitch(state, action){
      return {...state, changing: action.payload}
    },
    createProductInfo(state, action){
      return {...state, createProduct: action.payload}
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(createProduct.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(getProductList.fulfilled, (state, action) => {
        state.list = action.payload;
        state.changing = false;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.changing = false;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.list = state.list.filter((item) => item.id !== action.payload.id);
        state.changing = false;
      })
});

export const { changeInfo, createProductInfo, changingSwitch } = productSlice.actions;
export const productReducer = productSlice.reducer;
