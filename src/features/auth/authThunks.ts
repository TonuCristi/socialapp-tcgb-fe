import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AxiosResponse } from "axios";
import axios from "axios";

import { api } from "../../api/api";
import type { LoginForm, RegisterForm } from "../../types/User.type";

export const register = createAsyncThunk(
  "auth/register",
  async (user: RegisterForm, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<{ token: string }> = await api.post(
        `/auth/register`,
        user
      );

      localStorage.setItem("token", data.token);

      return data.token;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.message);
      }

      return rejectWithValue("Something went wrong!");
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (user: LoginForm, { rejectWithValue }) => {
    try {
      const { data }: AxiosResponse<{ token: string }> = await api.post(
        `/auth/login`,
        user
      );

      localStorage.setItem("token", data.token);

      return data.token;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.message);
      }

      return rejectWithValue("Something went wrong!");
    }
  }
);
