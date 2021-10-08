import axios from 'axios';
axios.defaults.baseURL = 'https://api.punkapi.com/v2';
const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);
export default axiosInstance;
