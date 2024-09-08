import { createSlice } from "@reduxjs/toolkit";
import { IProductsState } from "./types";
import mockProducts from "app/siteData/productsData";

const initialState: IProductsState = {
  productsList: mockProducts,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
