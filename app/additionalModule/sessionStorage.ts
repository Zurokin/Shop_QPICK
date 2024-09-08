import { IBasketState } from "../store/slices/basket/types";

type parsedData = IBasketState | null;

export const saveBasketToSessionStorage = (state: IBasketState) => {
  const key = process.env.REACT_APP_SESSION_STORAGE_KEY;
  if (key) {
    sessionStorage.setItem(key, JSON.stringify(state));
  }
};

export const getDataFromSessionStorage = (): parsedData => {
  const key = process.env.REACT_APP_SESSION_STORAGE_KEY;
  let result: parsedData = null;

  // sessionStorage.clear();

  if (key) {
    const data = sessionStorage.getItem(key);
    if (data) {
      result = JSON.parse(data);
    }
  }

  return result;
};
