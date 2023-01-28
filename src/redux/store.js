import { createStore, combineReducers } from "redux";
import productReducer from "./productReducer";
import CartReducer from "./cartReducer";

const store = createStore(
  combineReducers({
    product: productReducer,
    cart: CartReducer,
  })
);

export default store;
