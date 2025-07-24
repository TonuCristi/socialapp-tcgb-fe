import type { RootState } from "../../app/store";

export const selectCurrentUserIsLoading = (state: RootState) =>
  state.currentUser.isLoading;

export const selectCurrentUserIsEditProfileLoading = (state: RootState) =>
  state.currentUser.isEditUserLoading;

export const selectCurrentUserIsChangePasswordLoading = (state: RootState) =>
  state.currentUser.isChangePasswordLoading;

export const selectCurrentUserIsEditBioLoading = (state: RootState) =>
  state.currentUser.isEditBioLoading;

export const selectCurrentUser = (state: RootState) => state.currentUser.user;
