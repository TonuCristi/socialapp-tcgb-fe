import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectCurrentUserIsLoading } from "../../../features/user/currentUserSelectors";
import { getLoggedUser } from "../../../features/user/currentUserThunks";

export function useFetchLoggedUser() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectCurrentUserIsLoading);

  useEffect(() => {
    dispatch(getLoggedUser());
  }, [dispatch]);

  return { isLoading };
}
