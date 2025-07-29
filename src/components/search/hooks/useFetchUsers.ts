import { useCallback, useState } from "react";
import axios from "axios";

import { UsersApi } from "../../../services/UsersApi";
import type { UserPreview } from "../../../types/User.type";
import { mapUserPreview } from "../../../utils/mapUserPreview";

export function useFetchUsers() {
  const [users, setUsers] = useState<UserPreview[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getSearchedUsers = useCallback(async function (
    search: string,
    offset: number,
    limit: number
  ) {
    setIsLoading(true);

    try {
      const res = await UsersApi.getUsers(search, offset, limit);

      const users = res.users.map((userPreview) => mapUserPreview(userPreview));

      setUsers((prev) => (offset === 0 ? users : [...prev, ...users]));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (axios.isCancel(error)) {
        return;
      }

      console.log(error);
    }
  },
  []);

  return { getSearchedUsers, users, isLoading, setUsers };
}
