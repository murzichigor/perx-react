import axios from 'axios';
import { API_URL, TOKEN_KEY } from '../config';

// Do not send credentials if there isn't a token
let authorizationHeader = {};
if (TOKEN_KEY) {
  authorizationHeader = {
    Authorization: `token ${TOKEN_KEY}`,
  };
}

const api = axios.create({
  baseURL: API_URL,
  headers: {
    ...authorizationHeader,
  },
});

export default api;
