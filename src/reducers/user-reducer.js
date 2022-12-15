import { createSlice } from "@reduxjs/toolkit";

import { createUserThunk, loginThunk } from "../services/users/user-thunks";

const initialState = {
  user: {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
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
    [createUserThunk.fulfilled]: (state, action) => {
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
  },
});

export default userSlice.reducer;
