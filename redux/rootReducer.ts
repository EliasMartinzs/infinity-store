/* Instruments */
import { cartReducer } from "./slices/cart.slice";
import { favoriteReducer } from "./slices/favorite.slice";

export const reducer = {
  cart: cartReducer,
  favorite: favoriteReducer,
};
