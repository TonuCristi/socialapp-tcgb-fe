import { api } from "../api/api";
import type { LoginForm } from "../types/User.type";

const URL = "/auth";

export const AuthApi = {
  login(user: LoginForm) {
    return api.post(`${URL}/login`, user);
  },
};
