import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

axios.interceptors.request.use(function (config) {
  config.headers.Authorization = localStorage.getItem("token");

  return config;
});
