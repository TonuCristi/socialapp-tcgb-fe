import toast from "react-hot-toast";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";

import type { EditProfileForm } from "../../../types/User.type";
import { selectCurrentUserIsEditProfileLoading } from "../../../features/user/currentUserSelectors";
import { editUser } from "../../../features/user/currentUserThunks";

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
