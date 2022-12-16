import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const REVIEW_API = `${API_BASE}/review`;

export const getReviews = async (credentials) => {
  const response = await axios.get(`${REVIEW_API}/${credentials.contractAddress}/${credentials.tokenId}`);
  return response.data;
};

export const createReview = async (review) => {
  const response = await axios.post(`${REVIEW_API}/${review.contractAddress}/${review.tokenId}`, review);
  return response.data;
};
