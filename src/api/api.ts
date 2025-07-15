import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

api.interceptors.request.use(function (config) {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;

  return config;
});
