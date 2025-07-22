import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AxiosResponse } from "axios";
import axios from "axios";

import { api } from "../../api/api";
import { mapUser } from "../../utils/mapUser";
import type {
  ChangePasswordForm,
  EditProfileForm,
  UserResponse,
} from "../../types/User.type";

export const getLoggedUser = createAsyncThunk(
  "user/get-logged-user",
  async () => {
    const { data }: AxiosResponse<{ user: UserResponse }> = await api.get(
      "/user/get-logged-user"
    );

    const user = mapUser(data.user);

    return user;
  }
);

export const editUser = createAsyncThunk(
  "user/edit-user",
  async (editedUser: EditProfileForm, { rejectWithValue }) => {
    try {
      const {
        data,
      }: AxiosResponse<{ editedUser: UserResponse; message: string }> =
        await api.put("/user/edit-user", editedUser);

      const user = mapUser(data.editedUser);

      return { user, message: data.message };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.message);
      }

      return rejectWithValue("Something went wrong!");
    }
  }
);

export const editBio = createAsyncThunk(
  "user/edit-user-bio",
  async (bio: string, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<{ bio: string; message: string }> =
        await api.put("/user/edit-user-bio", { bio });

      return { bio: data.bio, message: data.message };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.message);
      }

      return rejectWithValue("Something went wrong!");
    }
  }
);

export const changePassword = createAsyncThunk(
  "user/change-password",
  async (passwords: ChangePasswordForm, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<{ message: string }> = await api.put(
        "/user/change-password",
        passwords
      );

      return { message: data.message };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.message);
      }

      return rejectWithValue("Something went wrong!");
    }
  }
);
