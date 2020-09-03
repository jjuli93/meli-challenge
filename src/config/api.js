import { create } from 'apisauce';

const baseURL = process.env.apiURL;

const api = create({
  baseURL,
  timeout: 15000
});

export default api;
