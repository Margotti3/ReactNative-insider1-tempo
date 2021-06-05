import axios from 'axios';

export const key = '833851e3';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com',
});

export default api;