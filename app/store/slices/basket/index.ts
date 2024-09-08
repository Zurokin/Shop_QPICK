import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBasketState, ICounterAction } from "./types";
import { IProduct } from "../products/types";
import {
  addAction,
  decreaseAction,
  deleteAction,
  fetchAction,
  increaseAction,
} from "./actions";

const initialState: IBasketState = {
  basketProductsList: [],
  totalSum: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    fetchBasketData(state) {
      fetchAction(state);
    },
    addToBasket(state, action: PayloadAction<IProduct>) {
      addAction(state, action);
    },
    decreaseProductQuantity(state, action: PayloadAction<ICounterAction>) {
      decreaseAction(state, action);
    },
    increaseProductQuantity(state, action: PayloadAction<ICounterAction>) {
      increaseAction(state, action);
    },
    deleteFromBasket(state, action: PayloadAction<ICounterAction>) {
      deleteAction(state, action);
    },
  },
});

export const {
  fetchBasketData,
  addToBasket,
  decreaseProductQuantity,
  increaseProductQuantity,
  deleteFromBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
