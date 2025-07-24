import { useCallback, useState } from "react";
import axios from "axios";

import { UsersApi } from "../../../services/UsersApi";
import type { UserPreview } from "../../../types/User.type";
import { mapUserPreview } from "../../../utils/mapUserPreview";

export function useFetchUsers() {
  const [users, setUsers] = useState<UserPreview[]>([]);
  const [usersCount, setUsersCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getSearchedUsers = useCallback(async function (
    search: string,
    offset: number,
    limit: number,
    abortController: AbortController
  ) {
    // if (isLoading) return;

    setIsLoading(true);

    try {
      const res = await UsersApi.getUsers(
        search,
        offset,
        limit,
        abortController
      );

      const users = res.data.users.map((userPreview) =>
        mapUserPreview(userPreview)
      );

      const usersCount = res.data.usersCount;

      setUsers((prev) => (offset === 0 ? users : [...prev, ...users]));
      setUsersCount(usersCount);
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

  return { getSearchedUsers, users, usersCount, isLoading, setUsers };
}
