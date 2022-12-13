import { createSlice } from "@reduxjs/toolkit";
import { getProductThunk, getProductTransactionThunk } from "../services/product/product-thunk";

const initialState = {
  product: {},
  transactions: [],
  loading: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getProductThunk.pending]: (state) => {
      state.loading = true;
      state.product = {};
    },
    [getProductThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.product = payload;
    },
    [getProductThunk.rejected]: (state) => {
      state.loading = false;
    },
    [getProductTransactionThunk.pending]: (state) => {
      state.loading = false;
      state.transactions = [];
    },
    [getProductTransactionThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.transactions = payload;
    },
    [getProductTransactionThunk.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default productSlice.reducer;
