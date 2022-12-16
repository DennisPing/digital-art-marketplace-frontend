import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./purchase-service";

export const getPurchasesThunk = createAsyncThunk("purchase/getPurchases", async () => {
  return await service.getPurchases();
});

export const getPurchasesByUserIdThunk = createAsyncThunk("purchase/getPurchasesByUserId", async (userId) => {
  return await service.getPurchasesByUserId(userId);
});

export const createPurchaseThunk = createAsyncThunk("purchase/createPurchase", async (purchase) => {
  return await service.createPurchase(purchase);
});
