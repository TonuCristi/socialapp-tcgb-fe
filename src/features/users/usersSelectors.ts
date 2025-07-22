import type { RootState } from "../../app/store";

export const selectUsersIsLoading = (state: RootState) => state.users.isLoading;

export const selectUsers = (state: RootState) => state.users.users;
