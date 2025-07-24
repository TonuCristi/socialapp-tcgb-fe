import type { RootState } from "../../app/store";

export const selectAuthIsLogged = (state: RootState) => state.auth.isLogged;
export const selectAuthIsLoading = (state: RootState) => state.auth.isLoading;
