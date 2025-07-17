import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  changePassword,
  selectCurrentUserIsChangePasswordLoading,
} from "../../../features/user/currentUserSlice";
import type { ChangePasswordForm } from "../../../types/User.type";

export function useChangePassword() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectCurrentUserIsChangePasswordLoading);

  async function changeUserPassword(passwords: ChangePasswordForm) {
    try {
      const res = await dispatch(changePassword(passwords)).unwrap();

      toast.success(res.message);
    } catch (error) {
      toast.error(error as string);
    }
  }

  return { changeUserPassword, isLoading };
}
