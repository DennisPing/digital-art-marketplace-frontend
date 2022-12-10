import { createSlice } from "@reduxjs/toolkit";

import {deleteUserThunk}
    from "../services/users-thunks";





const initialState = {
    users: [],
    loading: false
}



const usersSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: {

        [deleteUserThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(u => u._id !== payload)
            }




    },


    reducers: {


        deleteUser(state, action) {
            const index = state
                .findIndex(user =>
                    user._id === action.payload);
            state.splice(index, 1);
        },



    }




});

export const {deleteUser} = usersSlice.actions;
export default usersSlice.reducer;