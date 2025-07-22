import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AxiosResponse } from "axios";

import { api } from "../../api/api";
import type { UserPreviewResponse } from "../../types/User.type";
import { mapUserPreview } from "../../utils/mapUserPreview";

type UserFilters = {
  search: string;
  offset: number;
  limit: number;
};

export const getUsers = createAsyncThunk(
  "user/get-users",
  async (filters: UserFilters, thunkAPI) => {
    const { data }: AxiosResponse<{ users: UserPreviewResponse[] }> =
      await api.get(
        `/user/get-users?search=${filters.search}&offset=${filters.offset}&limit=${filters.limit}`,
        { signal: thunkAPI.signal }
      );

    const users = data.users.map((user) => mapUserPreview(user));

    return users;
  }
);
