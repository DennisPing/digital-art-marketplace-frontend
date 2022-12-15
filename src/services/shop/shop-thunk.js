import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./shop-service";

export const getShopThunk = createAsyncThunk("shop/getShop", async ({ encodedName }) => {
  console.log("getShopThunk: ", encodedName);
  return await service.getShop(encodedName);
});
