import { PayloadAction } from "@reduxjs/toolkit";
import { IBasketState, ICounterAction } from "./types";
import { IProduct } from "../products/types";
import getDiscountedPrice from "app/additionalModule/productDiscount";
import {
  getDataFromSessionStorage,
  saveBasketToSessionStorage,
} from "app/additionalModule/sessionStorage";

// Функция обновления состояния корзины
const finalizeBasketUpdate = (state: IBasketState) => {
  updateTotalSum(state);
  saveBasketToSessionStorage(state);
};

// Функция для обновления общей суммы
const updateTotalSum = (state: IBasketState) => {
  state.totalSum = state.basketProductsList.reduce(
    (total, product) => total + product.sum,
    0
  );
};

// Загрузка данных корзины
export const fetchAction = (state: IBasketState) => {
  const data = getDataFromSessionStorage();
  if (data) {
    Object.assign(state, data);
  }
};

// Добавление товара в корзину
export const addAction = (
  state: IBasketState,
  action: PayloadAction<IProduct>
) => {
  const { id, price, discount } = action.payload;
  const candidate = state.basketProductsList.find((p) => p.id === id);
  const currentPrice = getDiscountedPrice(price, discount);

  if (candidate) {
    candidate.quantity++;
    candidate.sum += currentPrice;
  } else {
    state.basketProductsList.push({
      id,
      product: action.payload,
      quantity: 1,
      sum: currentPrice,
    });
  }

  finalizeBasketUpdate(state);
};

// Универсальная функция для изменения количества продукта
const changeQuantity = (
  state: IBasketState,
  action: PayloadAction<ICounterAction>,
  delta: number
) => {
  const basketProduct = state.basketProductsList.find(
    (p) => p.id === action.payload.id
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
        (p) => p.id !== basketProduct.id
      );
    }

    finalizeBasketUpdate(state);
  }
};

// Уменьшение количества продукта
export const decreaseAction = (
  state: IBasketState,
  action: PayloadAction<ICounterAction>
) => changeQuantity(state, action, -1);

// Увеличение количества продукта
export const increaseAction = (
  state: IBasketState,
  action: PayloadAction<ICounterAction>
) => changeQuantity(state, action, 1);

// Удаление продукта из корзины
export const deleteAction = (
  state: IBasketState,
  action: PayloadAction<ICounterAction>
) => {
  state.basketProductsList = state.basketProductsList.filter(
    (p) => p.id !== action.payload.id
  );
  finalizeBasketUpdate(state);
};
