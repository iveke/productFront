import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3005/product";

export const createProduct = createAsyncThunk(
  "product/create",
  async (arg, thunkAPI) => {
    try {
      const res = await axios.post("/", arg);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getProductList = createAsyncThunk("product/getList", async (_, thunkAPI) => {
    try {
        const res = await axios.get("/list");
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const updateProduct = createAsyncThunk('product/update', async (arg, thunkAPI) => {
  try {
    const res = await axios.patch(`/${arg.id}`, arg.data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})

export const deleteProduct = createAsyncThunk('product/delete', async (arg, thunkAPI)=> {
  try {
    const res = await axios.delete(`/${arg}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error)
  }
})



