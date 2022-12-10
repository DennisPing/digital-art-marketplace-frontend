import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./users-service"

export const createUserThunk =
    createAsyncThunk(
        'users/createUser',
        async (user) =>
            await service.createUser(user)
    )

export const deleteUserThunk = createAsyncThunk(
    'users/deleteUser',
    async (userId) => {
        await service.deleteUser(userId)
        return userId
    })

