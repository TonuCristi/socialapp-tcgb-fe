import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../../app/store";
import { login, register } from "./authThunks";

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
