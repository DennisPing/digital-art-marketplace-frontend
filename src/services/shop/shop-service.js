import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

export const getShop = async (constractAddress, page) => {
  const response = await axios.get(`${API_BASE}/api/shop/${constractAddress}/${page}`);
  return response.data;
};
