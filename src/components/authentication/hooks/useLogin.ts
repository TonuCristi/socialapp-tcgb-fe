import { useNavigate } from "react-router";
import toast from "react-hot-toast";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectAuthIsLoading } from "../../../features/auth/authSlice";
import type { LoginForm } from "../../../types/User.type";
import { login } from "../../../features/auth/authThunks";

export function useLogin() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectAuthIsLoading);
  const navigate = useNavigate();

  async function loginUser(user: LoginForm) {
    try {
      await dispatch(login(user)).unwrap();
      navigate("/");
    } catch (error) {
      toast.error(error as string);
    }
  }

  return { loginUser, isLoading };
}
