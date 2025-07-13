import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { LoginForm } from "../../types/User.type";
import { AuthApi } from "../../services/AuthApi";

export const login = createAsyncThunk("auth/login", async (user: LoginForm) => {
  const res = await AuthApi.login(user);
  return res;
});

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
  reducers: {
    saveToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isLogged = false;
      state.isLoading = false;
    },
  },
});

export const { saveToken } = authSlice.actions;

export default authSlice.reducer;
