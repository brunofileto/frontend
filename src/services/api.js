import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: " http://34.224.173.214"
});

api.interceptors.request.use(function (config) {
  const token = getToken();
  if (token) {
    config.headers.Authorization = 'Token ' + token;
  }
  return config;
})

export default api;
