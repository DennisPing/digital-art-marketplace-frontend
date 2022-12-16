import { createSlice } from "@reduxjs/toolkit";
import { getCollectionsThunk, searchCollectionsThunk } from "../services/collections/collections-thunk";

const initialState = {
  collections: [],
  loading: false,
};

const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  extraReducers: {
    [getCollectionsThunk.pending]: (state) => {
      state.loading = true;
    },
    [getCollectionsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.collections = payload;
    },
    [getCollectionsThunk.rejected]: (state) => {
      state.loading = false;
    },
    [searchCollectionsThunk.pending]: (state) => {
      state.loading = true;
    },
    [searchCollectionsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.collections = payload;
    },
  },
});

export default collectionsSlice.reducer;
