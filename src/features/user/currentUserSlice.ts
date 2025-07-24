import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { User } from "../../types/User.type";
import {
  changePassword,
  editBio,
  editUser,
  getLoggedUser,
} from "./currentUserThunks";

export type UserState = {
  isLoading: boolean;
  isEditUserLoading: boolean;
  isEditBioLoading: boolean;
  isChangePasswordLoading: boolean;
  user: User | null;
};

const initialState: UserState = {
  isLoading: true,
  isEditUserLoading: false,
  isEditBioLoading: false,
  isChangePasswordLoading: false,
  user: null,
};

export const currentUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLoggedUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getLoggedUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(getLoggedUser.rejected, (state) => {
      state.user = null;
      state.isLoading = false;
    });
    builder.addCase(editUser.pending, (state) => {
      state.isEditUserLoading = true;
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      state.isEditUserLoading = false;
      state.user = action.payload.user;
    });
    builder.addCase(editUser.rejected, (state) => {
      state.isEditUserLoading = false;
    });
    builder.addCase(changePassword.pending, (state) => {
      state.isChangePasswordLoading = true;
    });
    builder.addCase(changePassword.fulfilled, (state) => {
      state.isChangePasswordLoading = false;
    });
    builder.addCase(changePassword.rejected, (state) => {
      state.isChangePasswordLoading = false;
    });
    builder.addCase(editBio.pending, (state) => {
      state.isEditBioLoading = true;
    });
    builder.addCase(editBio.fulfilled, (state, action) => {
      if (state.user) {
        state.user = { ...state.user, bio: action.payload.bio };
      }
      state.isEditBioLoading = false;
    });
    builder.addCase(editBio.rejected, (state) => {
      state.isEditBioLoading = false;
    });
  },
});

export default currentUserSlice.reducer;

export const { deleteUser } = currentUserSlice.actions;
