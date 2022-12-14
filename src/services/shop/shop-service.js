import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

export const getShop = async (contractAddress, page) => {
  const response = await axios.get(`${API_BASE}/shop/${contractAddress}/${page}`);
  return response.data;
};
