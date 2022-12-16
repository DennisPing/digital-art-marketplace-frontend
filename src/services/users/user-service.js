import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const USERS_API = `${API_BASE}/users`;

const api = axios.create({
  withCredentials: true,
});

// create aka register
export const createUser = async (user) => {
  const response = await api.post(`${USERS_API}`, user);
  return response.data;
};

export const updateUser = async (user) => {
  const response = await api.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

// login user
export const login = async (user) => {
  const response = await api.post(`${USERS_API}/login`, user);
  return response.data;
};

// delete user
export const deleteUser = async (user) => {
  const response = await api.delete(`${USERS_API}/${user._id}`, user);
  return response.data;
};
