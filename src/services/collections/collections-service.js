import axios from "axios";

const COLLECTION_API = "http://localhost:4000/api/collection";

export const getCollections = async () => {
  const response = await axios.get(`${COLLECTION_API}`);
  return response.data;
};
