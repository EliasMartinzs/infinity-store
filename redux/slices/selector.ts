import type { ReduxState } from "../store";

export const selectToggleCart = (state: ReduxState) => state.cart.isOpen;
