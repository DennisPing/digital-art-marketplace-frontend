import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./review-service";

export const getReviewsThunk = createAsyncThunk(
    "review/getReview",
    async ({ contractAddress, tokenId }) => await service.getReviews(contractAddress, tokenId)
);

export const createReviewThunk = createAsyncThunk(
    "review/createReview",
    async ({ contractAddress, tokenId, review }) => await service.createReview(contractAddress, tokenId, review)
);
