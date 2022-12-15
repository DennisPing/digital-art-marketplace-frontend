import { createSlice } from "@reduxjs/toolkit";
import { getProductThunk, getProductTransactionThunk } from "../services/product/product-thunk";

const initialState = {
  product: {},
  transaction: {},
  loading: false,
  txLoading: false,
};

const productSlice = createSlice({
  name: "product",
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
      state.txLoading = true;
      state.transaction = {};
    },
    [getProductTransactionThunk.fulfilled]: (state, { payload }) => {
      state.txLoading = false;
      state.transaction = payload;
    },
    [getProductTransactionThunk.rejected]: (state) => {
      state.txLoading = false;
    },
  },
});

export default productSlice.reducer;
