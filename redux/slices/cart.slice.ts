import { ProductIdParams } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type InitalState = {
  isOpen: boolean;
  cartItem: ProductIdParams[];
};

const initialState: InitalState = {
  isOpen: false,
  cartItem: [],
};

const addProductToCart = (
  cartItems: ProductIdParams[],
  productToAdd: ProductIdParams
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem: any) =>
      cartItem.id === productToAdd.id ? { ...cartItem, quantity: 1 } : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const increaseQuantityProduct = (
  cartItems: ProductIdParams[],
  quantityToAdd: ProductIdParams
) => {
  return cartItems.map((cartItem) =>
    cartItem.id === quantityToAdd.id
      ? //@ts-ignore
        { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};

const decreaseQuantityProduct = (
  cartItems: ProductIdParams[],
  productToRemove: ProductIdParams
) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingItem?.quantity === 1) {
    return cartItems.filter((carItem) => carItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? //@ts-ignore
        { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearItemFromCart = (
  cartItems: ProductIdParams[],
  clearItem: ProductIdParams
) => cartItems.filter((cartItem) => cartItem.id !== clearItem.id);

export const cart = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    toggleMenu: (state, action) => {
      return void (state.isOpen = action.payload);
    },
    toggleFavorite: (state, action) => {
      return void (state.cartItem = addProductToCart(
        state.cartItem,
        action.payload
      ));
    },
    decreaseQuantity: (state, action) => {
      return void (state.cartItem = decreaseQuantityProduct(
        state.cartItem,
        action.payload
      ));
    },
    increaseQuantity: (state, action) => {
      return void (state.cartItem = increaseQuantityProduct(
        state.cartItem,
        action.payload
      ));
    },
    removeAllItem: (state, action) => {
      return void (state.cartItem = clearItemFromCart(
        state.cartItem,
        action.payload
      ));
    },
  },
});

export const {
  toggleMenu,
  toggleFavorite,
  decreaseQuantity,
  removeAllItem,
  increaseQuantity,
} = cart.actions;
export const cartReducer = cart.reducer;
