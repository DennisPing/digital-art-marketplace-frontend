import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./shop-service";

export const getShopThunk = createAsyncThunk("shop/getShop", async ({ constractAddress, page }) => {
  return await service.getShop(constractAddress, page);
});
