import { createSlice } from "@reduxjs/toolkit";
import { getReviewsThunk, createReviewThunk } from "../services/review/review-thunk";

const initialState = {
  reviews: [],
  loading: false
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  extraReducers: {
    [getReviewsThunk.pending]: (state) => {
      state.loading = true;
      state.reviews = [];
    },
    [getReviewsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.reviews = payload;
    },
    [getReviewsThunk.rejected]: (state) => {
      state.loading = false;
    },
    [createReviewThunk.pending]: (state) => {
      state.loading = true;
      state.reviews = [];
    },
    [createReviewThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.reviews.push(payload);
    },
    [createReviewThunk.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default reviewSlice.reducer;
