import { useRef, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import toast from "react-hot-toast";
import { getUsers } from "../../../features/users/usersThunks";

export function useFetchUsers() {
  const [offset, setOffset] = useState<number>(0);
  const dispatch = useAppDispatch();
  const abortControllerRef = useRef<AbortController | null>(null);

  async function getSearchedUsers(search: string) {
    try {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      const abortController = new AbortController();
      abortControllerRef.current = abortController;

      await dispatch(
        getUsers(
          { search, offset, limit: 5 },
          { signal: abortControllerRef.current.signal }
        )
      ).unwrap();
    } catch (error) {
      toast.error(error as string);
    }
  }

  return { getSearchedUsers, offset, setOffset };
}
