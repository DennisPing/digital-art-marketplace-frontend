import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const REVIEW_API = `${API_BASE}/review`;

const api = axios.create({
  withCredentials: true,
});

export const getReviews = async (credentials) => {
  const response = await api.get(`${REVIEW_API}/${credentials.contractAddress}/${credentials.tokenId}`);
  return response.data;
};

export const createReview = async (review) => {
  const response = await api.post(`${REVIEW_API}/${review.contractAddress}/${review.tokenId}`, review);
  return response.data;
};
