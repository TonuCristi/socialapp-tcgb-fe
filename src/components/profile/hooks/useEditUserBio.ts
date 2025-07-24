import toast from "react-hot-toast";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectCurrentUserIsEditBioLoading } from "../../../features/user/currentUserSelectors";
import { editBio } from "../../../features/user/currentUserThunks";

export function useEditUserBio() {
  const isLoading = useAppSelector(selectCurrentUserIsEditBioLoading);
  const dispatch = useAppDispatch();

  async function editUserBio(bio: string) {
    try {
      const res = await dispatch(editBio(bio)).unwrap();

      toast.success(res.message);
    } catch (error) {
      toast.error(error as string);
    }
  }

  return { editUserBio, isLoading };
}
