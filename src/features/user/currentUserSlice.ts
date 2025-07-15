import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { User, UserResponse } from "../../types/User.type";
import type { RootState } from "../../app/store";
import type { AxiosResponse } from "axios";
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

export type UserState = {
  isLoading: boolean;
  user: User | null;
};

const initialState: UserState = {
  isLoading: true,
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
  },
});

export default currentUserSlice.reducer;

export const { deleteUser } = currentUserSlice.actions;

export const selectCurrentUserIsLoading = (state: RootState) =>
  state.currentUser.isLoading;
export const selectCurrentUser = (state: RootState) => state.currentUser.user;
