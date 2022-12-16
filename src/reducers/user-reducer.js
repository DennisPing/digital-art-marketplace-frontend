import { createSlice } from "@reduxjs/toolkit";

import { createUserThunk, updateUserThunk, loginThunk, deleteUserThunk } from "../services/users/user-thunks";
import { getPurchasesThunk, getPurchasesByUserIdThunk } from "../services/purchases/purchase-thunk";

const initialState = {
  user: null,
  mycollection: [],
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [createUserThunk.pending]: (state) => {
      state.loading = true;
    },
    [createUserThunk.rejected]: (state) => {
      state.loading = false;
    },
    // After you register you still need to manually log in
    [createUserThunk.fulfilled]: (state) => {
      state.loading = false;
    },
    [updateUserThunk.pending]: (state) => {
      state.loading = true;
    },
    [updateUserThunk.rejected]: (state) => {
      state.loading = false;
    },
    [updateUserThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [loginThunk.pending]: (state) => {
      state.loading = true;
    },
    [loginThunk.rejected]: (state) => {
      state.loading = false;
    },
    [loginThunk.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
    [deleteUserThunk.rejected]: (state) => {
      state.loading = false;
    },
    [deleteUserThunk.fulfilled]: (state) => {
      state.user = null;
    },
    [getPurchasesThunk.pending]: (state) => {
      state.loading = true;
    },
    [getPurchasesThunk.rejected]: (state) => {
      state.loading = false;
    },
    [getPurchasesThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.mycollection = action.payload;
    },
    [getPurchasesByUserIdThunk.pending]: (state) => {
      state.loading = true;
    },
    [getPurchasesByUserIdThunk.rejected]: (state) => {
      state.loading = false;
    },
    [getPurchasesByUserIdThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.mycollection = action.payload;
    },
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
});

export default userSlice.reducer;
export const { logout } = userSlice.actions;
