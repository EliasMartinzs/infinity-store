import { createSlice } from "@reduxjs/toolkit";

type InitalState = {
  isOpen: boolean;
};

const initialState: InitalState = {
  isOpen: false,
};

export const cart = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    toggleMenu: (state, action) => {
      return void (state.isOpen = action.payload);
    },
  },
});

export const { toggleMenu } = cart.actions;
export const cartReducer = cart.reducer;
