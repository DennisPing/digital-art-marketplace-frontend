import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./collections-service";

export const getCollectionsThunk = createAsyncThunk("collection/getCollections", async () => {
  return await service.getCollections();
});
