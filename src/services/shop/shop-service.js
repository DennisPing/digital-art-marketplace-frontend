import axios from "axios";

const SHOP_API = "http://localhost:4000/api/shop";

export const getShop = async (constractAddress, page) => {
  const response = await axios.get(`${SHOP_API}/${constractAddress}/${page}`);
  return response.data;
};
