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
      await dispatch(editUser(editedUser));
    } catch (error) {
      toast.error(error as string);
    }
  }

  return { editUserDetails, isLoading };
}
