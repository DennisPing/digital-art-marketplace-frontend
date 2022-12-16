import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

const api = axios.create({
  withCredentials: true,
});

export const getProduct = async (contractAddress, tokenId) => {
  const response = await api.get(`${API_BASE}/product/${contractAddress}/${tokenId}`);
  return response.data;
};

export const getProductTransaction = async (contractAddress, tokenId) => {
  const response = await api.get(`${API_BASE}/product/tx/${contractAddress}/${tokenId}`);
  return response.data;
};
