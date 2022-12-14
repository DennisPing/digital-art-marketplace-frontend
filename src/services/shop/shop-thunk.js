import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./shop-service";

// IMPORTANT: createAsyncThunk only accepts ONE parameter, which is an object. Thus, pass multiple parameters in as an object.
export const getShopThunk = createAsyncThunk("shop/getShop", async (params) => {
  return await service.getShop(params.contractAddress, params.page);
});
