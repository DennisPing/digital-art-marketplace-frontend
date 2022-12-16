import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
const PURCHASE_API = `${API_BASE}/purchases`;

const api = axios.create({
  withCredentials: true,
});

export const getPurchases = async (credentials) => {
  const response = await api.get(`${PURCHASE_API}`);
  return response.data;
};

export const getPurchasesByUserId = async (userId) => {
  const response = await api.get(`${PURCHASE_API}/${userId}`);
  return response.data;
};

export const createPurchase = async (purchase) => {
  const response = await api.post(`${PURCHASE_API}`, purchase);
  return response.data;
};
