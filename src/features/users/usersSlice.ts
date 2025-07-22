import { createSlice } from "@reduxjs/toolkit";

import type { UserPreview } from "../../types/User.type";
import { getUsers } from "./usersThunks";

export type UsersState = {
  isLoading: boolean;
  users: UserPreview[];
};

const initialState: UsersState = {
  isLoading: true,
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default usersSlice.reducer;
