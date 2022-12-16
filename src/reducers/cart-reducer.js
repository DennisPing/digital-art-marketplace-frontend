import { createSlice } from "@reduxjs/toolkit";

import { createPurchaseThunk } from "../services/purchases/purchase-thunk";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  extraReducers: {
    [createPurchaseThunk.fulfilled]: (state, { payload }) => {
      state.cart = [];
    },
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const itemInCart = state.cart.find(
        (item) => item.contractAddress === payload.contractAddress && item.tokenId === payload.tokenId
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push(payload);
      }
    },
    removeItem: (state, { payload }) => {
      const index = state.cart.findIndex(
        (item) => item.contractAddress === payload.contractAddress && item.tokenId === payload.tokenId
      );
      if (index >= 0) {
        state.cart.splice(index, 1);
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeItem } = cartSlice.actions;
