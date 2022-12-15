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

// const initialState = {
//   username: "un",
//   password: "pw",
//   firstName: "fn",
//   lastName: "lm",
//   email: "email@email.com",
//   phone: "000-000-0000",
// };

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [createUserThunk.fulfilled]: (state, action) => {
      state.user = action.payload;
    },

    [loginThunk.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
