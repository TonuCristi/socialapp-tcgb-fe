import type { AxiosResponse } from "axios";
import { api } from "../api/api";
import type { UserPreviewResponse } from "../types/User.type";

const URL = "/user";

export const UsersApi = {
  async getUsers(
    search: string,
    offset: number,
    limit: number,
    abortController: AbortController
  ): Promise<
    AxiosResponse<{ users: UserPreviewResponse[]; usersCount: number }>
  > {
    const data = await api.get<{
      users: UserPreviewResponse[];
      usersCount: number;
    }>(`${URL}/get-users?search=${search}&offset=${offset}&limit=${limit}`, {
      signal: abortController.signal,
    });

    return data;
  },
};
