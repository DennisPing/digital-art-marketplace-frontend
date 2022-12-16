import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const REVIEW_API = `${API_BASE}/review`;

export const getReviews = async (contractAddress, tokenId) => {
  const response = await axios.get(`${REVIEW_API}/${contractAddress}/${tokenId}`);
  return response.data;
};

export const createReview = async (contractAddress, tokenId, review) => {
  const response = await axios.post(`${REVIEW_API}/${contractAddress}/${tokenId}`, review);
  return response.data;
};
