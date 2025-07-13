import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { AxiosResponse } from "axios";
import axios from "axios";

import type { RegisterForm } from "../../types/User.type";
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

const initialState: AuthState = {
  token: "",
  isLogged: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
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
  },
});

export default authSlice.reducer;

export const selectAuthIsLogged = (state: RootState) => state.auth.isLogged;
export const selectAuthIsLoading = (state: RootState) => state.auth.isLoading;
