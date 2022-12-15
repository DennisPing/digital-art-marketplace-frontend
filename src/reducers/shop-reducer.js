import { createSlice } from "@reduxjs/toolkit";
import { getShopThunk } from "../services/shop/shop-thunk";

const initialState = {
  shop: [],
  shopLoading: false,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  extraReducers: {
    [getShopThunk.pending]: (state) => {
      state.shopLoading = true;
      state.shop = [];
    },
    [getShopThunk.fulfilled]: (state, { payload }) => {
      state.shopLoading = false;
      state.shop = payload;
    },
    [getShopThunk.rejected]: (state) => {
      state.shopLoading = false;
    },
  },
});

export default shopSlice.reducer;
