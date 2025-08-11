import { api } from "../api/api";
import type { UserPreview, UserPreviewResponse } from "../types/User.type";
import { mapUserPreview } from "../utils/mapUserPreview";

const URL = "/user";

export const UsersApi = {
  async getUsers(
    search: string,
    offset: number,
    limit: number
  ): Promise<{ users: UserPreview[]; nextPage: number }> {
    const res = await api.get<{
      users: UserPreviewResponse[];
      nextPage: number;
    }>(`${URL}/get-users?search=${search}&offset=${offset}&limit=${limit}`);

    const users = res.data.users.map(mapUserPreview);

    return { users, nextPage: res.data.nextPage };
  },
};
