import axios from 'axios';

const api = axios.create({
  baseURL: 'https://warement.herokuapp.com/',
  // baseURL: 'http://localhost:3001/',
});

api.interceptors.request.use(async (config) => config);

export default api;
