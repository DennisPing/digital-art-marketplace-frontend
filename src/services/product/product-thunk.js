import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./product-service";

export const getProductThunk = createAsyncThunk(
  "product/getProduct",
  async ({ contractAddress, tokenId }) => await service.getProduct(contractAddress, tokenId)
);

export const getProductTransactionThunk = createAsyncThunk(
  "product/getProductTransaction",
  async ({ contractAddress, tokenId }) => await service.getProductTransaction(contractAddress, tokenId)
);
