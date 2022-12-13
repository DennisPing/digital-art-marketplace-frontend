import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const USERS_API = `${API_BASE}/users`;

// create aka register
export const create = async (user) => {
    const response = await axios
        .post(`${USERS_API}`, user);
    return response.data;
}

// fetch profile