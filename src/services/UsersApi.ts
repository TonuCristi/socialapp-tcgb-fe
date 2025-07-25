import { api } from "../api/api";
import type { UserPreviewResponse } from "../types/User.type";

const URL = "/user";

export const UsersApi = {
  async getUsers(
    search: string,
    offset: number,
    limit: number
  ): Promise<{ users: UserPreviewResponse[]; nextPage: number }> {
    const res = await api.get<{
      users: UserPreviewResponse[];
      nextPage: number;
    }>(`${URL}/get-users?search=${search}&offset=${offset}&limit=${limit}`);

    return res.data;
  },
};
