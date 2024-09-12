import productsReducer from "./products";
import categoriesReducer from "./categories";
import basketReducer from "./basket";

const rootReducer = {
  categories: categoriesReducer,
  products: productsReducer,
  basket: basketReducer,
};

export default rootReducer;
