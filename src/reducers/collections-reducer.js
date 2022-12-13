import { createSlice } from "@reduxjs/toolkit";
import { getCollectionsThunk } from "../services/collections/collections-thunk";

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
      state.collections = [];
    },
    [getCollectionsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.collections = payload;
    },
    [getCollectionsThunk.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default collectionsSlice.reducer;
