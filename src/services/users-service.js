import axios from "axios";

const USERS_API = 'http://localhost:4000/api/tuits';

export const createUser = async (user) => {
    const response = await axios
        .post(`${USERS_API}`, user);
    return response.data;
}

export const deleteUser = async (uid) => {
    const response = await axios
        .delete(`${USERS_API}/${uid}`)
    return response.data
}

