import productsReducer from "./products";
import categoriesReducer from "./categories";
import basketReducer from "./basket";

export default {
  categories: categoriesReducer,
  products: productsReducer,
  basket: basketReducer,
};
