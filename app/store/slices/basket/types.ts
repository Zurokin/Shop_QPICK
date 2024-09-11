import { IProduct } from "../products/types";

export interface IBasketProduct {
  id: number;
  product: IProduct;
  quantity: number;
  sum: number;
}

export interface IBasketState {
  items: IProduct[];
  basketProductsList: IBasketProduct[];
  totalSum: number;
}

export interface ICounterAction {
  id: number;
}
