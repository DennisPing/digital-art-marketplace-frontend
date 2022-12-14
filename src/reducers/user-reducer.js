import { createSlice } from "@reduxjs/toolkit";

import {createUserThunk, loginThunk} from "../services/users/user-thunks"

const currentUser = {

    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: ""

};

const userSlice = createSlice({

        name: "currentUser",
        currentUser,

        extraReducers: {

            [createUserThunk.fulfilled]: (state, action) => {

                state.currentUser = action.payload

            },

            [loginThunk.fulfilled]: (state, action) => {

                state.currentUser = action.payload

            },
        }
    }

);

export default userSlice.reducer;