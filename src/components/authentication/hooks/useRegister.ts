import { useNavigate } from "react-router";
import toast from "react-hot-toast";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  register,
  selectAuthIsLoading,
} from "../../../features/auth/authSlice";
import type { RegisterForm } from "../../../types/User.type";

export function useRegister() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectAuthIsLoading);
  const navigate = useNavigate();

  async function registerUser(user: RegisterForm) {
    try {
      const token = await dispatch(register(user)).unwrap();
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      toast.error(error as string);
    }
  }

  return { registerUser, isLoading };
}
