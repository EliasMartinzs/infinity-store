import { ProductIdParams } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  allFavories: ProductIdParams[];
};

const initialState: InitialState = {
  allFavories: [],
};

const addToFavorites = (
  favoritesItems: ProductIdParams[],
  productToAdd: ProductIdParams
) => {
  const existingCartItem = favoritesItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return favoritesItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, isFavorited: true }
        : cartItem
    );
  }

  return [...favoritesItems, { ...productToAdd, isFavorited: true }];
};

const unFavorite = (
  favoritesItems: ProductIdParams[],
  productToAdd: ProductIdParams
) => {
  const existingCartItem = favoritesItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return favoritesItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, isFavorited: false }
        : cartItem
    );
  }

  return [...favoritesItems, { ...productToAdd, isFavorited: false }];
};

export const favorite = createSlice({
  name: "favorite",
  initialState: initialState,
  reducers: {
    favoriteProducts: (state, action) => {
      return void (state.allFavories = addToFavorites(
        state.allFavories,
        action.payload
      ));
    },
    unFavoriteProducts: (state, action) => {
      return void (state.allFavories = unFavorite(
        state.allFavories,
        action.payload
      ));
    },
  },
});

export const { favoriteProducts, unFavoriteProducts } = favorite.actions;
export const favoriteReducer = favorite.reducer;
