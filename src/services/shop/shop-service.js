import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

export const getShop = async (encodedName) => {
  const response = await axios.get(`${API_BASE}/shop/${encodedName}`);
  console.log(response.data);
  return response.data;
};
