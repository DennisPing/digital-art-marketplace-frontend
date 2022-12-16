import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

const api = axios.create({
  withCredentials: true,
});

export const getCollections = async () => {
  const response = await api.get(`${API_BASE}/collection`);
  return response.data;
};
