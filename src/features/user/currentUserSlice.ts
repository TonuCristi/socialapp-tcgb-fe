import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import type { AxiosResponse } from "axios";

import type {
  EditProfileForm,
  User,
  UserResponse,
} from "../../types/User.type";
import type { RootState } from "../../app/store";
import { api } from "../../api/api";
import { mapUser } from "../../utils/mapUser";

export const getLoggedUser = createAsyncThunk(
  "user/get-logged-user",
  async () => {
    const { data }: AxiosResponse<{ user: UserResponse }> = await api.get(
      `/user/get-logged-user`
    );

    const user = mapUser(data.user);

    return user;
  }
);

export const editUser = createAsyncThunk(
  "user/edit-user",
  async (editedUser: EditProfileForm, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<{ editedUser: UserResponse }> =
        await api.put(`/user/edit-user`, editedUser);

      const user = mapUser(data.editedUser);

      return user;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.message);
      }

      return rejectWithValue("Something went wrong!");
    }
  }
);

export type UserState = {
  isLoading: boolean;
  isEditUserLoading: boolean;
  user: User | null;
};

const initialState: UserState = {
  isLoading: true,
  isEditUserLoading: false,
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
      state.user = action.payload;
    });
    builder.addCase(editUser.rejected, (state) => {
      state.isEditUserLoading = false;
    });
  },
});

export default currentUserSlice.reducer;

export const { deleteUser } = currentUserSlice.actions;

export const selectCurrentUserIsLoading = (state: RootState) =>
  state.currentUser.isLoading;
export const selectCurrentUserIsEditProfileLoading = (state: RootState) =>
  state.currentUser.isEditUserLoading;
export const selectCurrentUser = (state: RootState) => state.currentUser.user;
