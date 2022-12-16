import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./review-service";

export const getReviewsThunk = createAsyncThunk(
  "review/getReview",
  async (credentials) => await service.getReviews(credentials)
);

export const createReviewThunk = createAsyncThunk(
  "review/createReview",
  async (review) => await service.createReview(review)
);
