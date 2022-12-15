import { createSlice } from "@reduxjs/toolkit";
import { getReviewsThunk, createReviewThunk } from "../services/review/review-thunk";

const initialState = {
  review: {
    content: "",
    username: "",
    contractAddress: "",
    tokenId: ""
  },
  loading: false
};

const reviewSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getReviewsThunk.pending]: (state) => {
      state.loading = true;
      state.review = {};
    },
    [getReviewsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.review = payload;
    },
    [getReviewsThunk.rejected]: (state) => {
      state.loading = false;
    },
    [createReviewThunk.pending]: (state) => {
      state.loading = true;
      state.review = {};
    },
    [createReviewThunk.fulfilled]: (state, { payload }) => {
      state.txLoading = false;
      state.transaction = payload;
    },
    [createReviewThunk.rejected]: (state) => {
      state.txLoading = false;
    },
  },
});

export default productSlice.reducer;
