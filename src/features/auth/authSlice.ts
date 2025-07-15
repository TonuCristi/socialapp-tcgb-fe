import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { AxiosResponse } from "axios";
import axios from "axios";

import type { LoginForm, RegisterForm } from "../../types/User.type";
import type { RootState } from "../../app/store";
import { api } from "../../api/api";

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

export type AuthState = {
  token: string;
  isLogged: boolean;
  isLoading: boolean;
};

const token = localStorage.getItem("token");

const initialState: AuthState = {
  token: token ? token : "",
  isLogged: !!token,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = "";
      state.isLogged = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      register.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.token = action.payload;
        state.isLogged = true;
        state.isLoading = false;
      }
    );
    builder.addCase(register.rejected, (state) => {
      state.token = "";
      state.isLogged = false;
      state.isLoading = false;
    });
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isLogged = true;
      state.isLoading = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.token = "";
      state.isLogged = false;
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;

export const { logout } = authSlice.actions;

export const selectAuthIsLogged = (state: RootState) => state.auth.isLogged;
export const selectAuthIsLoading = (state: RootState) => state.auth.isLoading;
