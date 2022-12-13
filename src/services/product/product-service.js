import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

export const getProduct = async (contractAddress, tokenId) => {
  const response = await axios.get(`${API_BASE}/api/product/${contractAddress}/${tokenId}`);
  return response.data;
};

export const getProductTransaction = async (contractAddress, tokenId) => {
  const response = await axios.get(`${API_BASE}/api/product/tx/${contractAddress}/${tokenId}`);
  return response.data;
};
