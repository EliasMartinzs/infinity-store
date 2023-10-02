import type { ReduxState } from "../store";

// cart selectors
export const selectToggleIsOpen = (state: ReduxState) => state.cart.isOpen;
export const selectCartItems = (state: ReduxState) => state.cart.cartItem;

// favorite selectors
export const selectIsFavorited = (state: ReduxState) =>
  state.favorite.allFavories;
