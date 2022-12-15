import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
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
      console.log(index);
      if (index >= 0) {
        state.cart.splice(index, 1);
      }

      // const keepItems = state.cart.filter(
      //   (item) => item.contractAddress !== payload.contractAddress && item.tokenId !== payload.tokenId
      // );
      // state.cart = keepItems;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeItem } = cartSlice.actions;
