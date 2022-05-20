import axios from 'axios';

export const API_URL = `https://tusur-todo-backend.herokuapp.com/api/v1`;

const $api = axios.create({
    // withCredentials: true,
    baseURL: API_URL,
});

export default $api;
