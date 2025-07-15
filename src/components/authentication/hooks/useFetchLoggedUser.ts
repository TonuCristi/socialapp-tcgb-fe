import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  getLoggedUser,
  selectCurrentUserIsLoading,
} from "../../../features/user/currentUserSlice";

export function useFetchLoggedUser() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectCurrentUserIsLoading);

  useEffect(() => {
    dispatch(getLoggedUser());
  }, [dispatch]);

  return { isLoading };
}
