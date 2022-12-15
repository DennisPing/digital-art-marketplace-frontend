import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./user-service";

export const createUserThunk = createAsyncThunk("users/createUser", async (user) => await service.createUser(user));

export const updateUserThunk = createAsyncThunk("users/updateUser", async (user) => await service.updateUser(user));

export const loginThunk = createAsyncThunk("users/loginUser", async (user) => await service.login(user));
