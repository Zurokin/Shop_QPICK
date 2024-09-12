import { IBasketState } from "../store/slices/basket/types";

type ParsedData = IBasketState | null;

const STORAGE_KEY =
  process.env.REACT_APP_SESSION_STORAGE_KEY || "defaultBasketKey";

export const saveBasketToSessionStorage = (state: IBasketState): void => {
  if (!STORAGE_KEY) {
    console.warn("SessionStorage key is not defined.");
    return;
  }
  try {
    const data = JSON.stringify(state);
    sessionStorage.setItem(STORAGE_KEY, data);
  } catch (error) {
    console.error("Error saving basket to sessionStorage:", error);
  }
};

export const getDataFromSessionStorage = (): ParsedData => {
  if (!STORAGE_KEY) {
    console.warn("SessionStorage key is not defined.");
    return null;
  }

  try {
    const data = sessionStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error reading basket from sessionStorage:", error);
    return null;
  }
};
