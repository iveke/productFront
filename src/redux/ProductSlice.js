import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "product",
  initialState: {
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
  },
});

export const { changeInfo, changingSwitch } = productSlice.actions;
export const productReducer = productSlice.reducer;
