import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./userService"

export const createUserThunk =
    createAsyncThunk(
        'users/createUser',
        async (user) =>
            await service.create(user)
    )