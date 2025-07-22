import toast from "react-hot-toast";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import type { ChangePasswordForm } from "../../../types/User.type";
import { selectCurrentUserIsChangePasswordLoading } from "../../../features/user/currentUserSelectors";
import { changePassword } from "../../../features/user/currentUserThunks";

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
