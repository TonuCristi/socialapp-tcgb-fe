import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");

  config.headers.authorization = `Bearer ${token}`;

  return config;
});
