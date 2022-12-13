import { createSlice } from "@reduxjs/toolkit";
import { getShopThunk } from "../services/shop/shop-thunk";

const initialState = {
  shop: [],
  loading: false,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  extraReducers: {
    [getShopThunk.pending]: (state) => {
      state.loading = true;
      state.shop = [];
    },
    [getShopThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.shop = payload;
    },
    [getShopThunk.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default shopSlice.reducer;
