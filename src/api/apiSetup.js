import axios from 'axios';
import { API_URL, TOKEN_KEY } from '../config';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `token ${TOKEN_KEY}`,
  },
});

export default api;
