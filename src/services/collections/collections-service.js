import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

export const getCollections = async () => {
  const response = await axios.get(`${API_BASE}/api/collection`);
  return response.data;
};
