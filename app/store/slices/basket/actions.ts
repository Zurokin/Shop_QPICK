import { PayloadAction } from "@reduxjs/toolkit";
import { IBasketState, ICounterAction } from "./types";
import { IProduct } from "../products/types";

import getDiscountedPrice from "app/additionalModule/productDiscount";
import {
  getDataFromSessionStorage,
  saveBasketToSessionStorage,
} from "app/additionalModule/sessionStorage";

// Функция для обновления общей суммы
const updateTotalSum = (state: IBasketState) => {
  state.totalSum = state.basketProductsList.reduce(
    (total, product) => total + product.sum,
    0
  );
};

export const fetchAction = (state: IBasketState) => {
  const data: IBasketState | null = getDataFromSessionStorage();
  if (data) {
    state.basketProductsList = data.basketProductsList;
    state.totalSum = data.totalSum;
  }
};

export const addAction = (
  state: IBasketState,
  action: PayloadAction<IProduct>
) => {
  const candidate = state.basketProductsList.find(
    (basketProduct) => basketProduct.id === action.payload.id
  );

  const currentPrice = getDiscountedPrice(
    action.payload.price,
    action.payload.discount
  );

  if (candidate) {
    candidate.quantity++;
    candidate.sum += currentPrice;
  } else {
    state.basketProductsList.push({
      id: action.payload.id,
      product: action.payload,
      quantity: 1,
      sum: currentPrice,
    });
  }

  updateTotalSum(state);
  saveBasketToSessionStorage(state);
};

// Универсальная функция для изменения количества продукта
const changeQuantity = (
  state: IBasketState,
  action: PayloadAction<ICounterAction>,
  delta: number
) => {
  const basketProduct = state.basketProductsList.find(
    (product) => product.id === action.payload.id
  );

  if (basketProduct) {
    const currentPrice = getDiscountedPrice(
      basketProduct.product.price,
      basketProduct.product.discount
    );

    basketProduct.quantity += delta;
    basketProduct.sum += delta * currentPrice;

    if (basketProduct.quantity <= 0) {
      state.basketProductsList = state.basketProductsList.filter(
        (product) => product.id !== basketProduct.id
      );
    }

    updateTotalSum(state);
    saveBasketToSessionStorage(state);
  }
};

export const decreaseAction = (
  state: IBasketState,
  action: PayloadAction<ICounterAction>
) => {
  changeQuantity(state, action, -1);
};

export const increaseAction = (
  state: IBasketState,
  action: PayloadAction<ICounterAction>
) => {
  changeQuantity(state, action, 1);
};

export const deleteAction = (
  state: IBasketState,
  action: PayloadAction<ICounterAction>
) => {
  state.basketProductsList = state.basketProductsList.filter(
    (product) => product.id !== action.payload.id
  );

  updateTotalSum(state);
  saveBasketToSessionStorage(state);
};
