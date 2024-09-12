import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBasketState, ICounterAction } from "./types";
import { IProduct } from "../products/types";
import * as actions from "./actions";

const initialState: IBasketState = {
  basketProductsList: [],
  totalSum: 0,
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    fetchBasketData(state) {
      actions.fetchAction(state);
    },
    addToBasket(state, action: PayloadAction<IProduct>) {
      actions.addAction(state, action);
    },
    decreaseProductQuantity(state, action: PayloadAction<ICounterAction>) {
      actions.decreaseAction(state, action);
    },
    increaseProductQuantity(state, action: PayloadAction<ICounterAction>) {
      actions.increaseAction(state, action);
    },
    deleteFromBasket(state, action: PayloadAction<ICounterAction>) {
      actions.deleteAction(state, action);
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
