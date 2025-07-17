import toast from "react-hot-toast";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  editUser,
  selectCurrentUserIsEditProfileLoading,
} from "../../../features/user/currentUserSlice";
import type { EditProfileForm } from "../../../types/User.type";

export function useEditUser() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectCurrentUserIsEditProfileLoading);

  async function editUserDetails(editedUser: EditProfileForm) {
    try {
      const res = await dispatch(editUser(editedUser)).unwrap();

      toast.success(res.message);
    } catch (error) {
      toast.error(error as string);
    }
  }

  return { editUserDetails, isLoading };
}
