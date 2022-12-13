import axios from 'axios';

// const API_BASE = process.env.REACT_APP_API_BASE;
// const PRODUCT_API = `${API_BASE}/product`;

const PRODUCT_API = 'http://localhost:4000/api/product';
const PRODUCT_TRANSACTION_API = 'http://localhost:4000/api/product/tx';


export const getProduct = async (contractAddress, tokenId) => {
  const response = await axios.get(`${PRODUCT_API}/${contractAddress}/${tokenId}`);
  return response.data;
}

export const getProductTransaction = async (contractAddress, tokenId) => {
  const response = await axios.get(`${PRODUCT_TRANSACTION_API}/${contractAddress}/${tokenId}`);
  return response.data;
}

