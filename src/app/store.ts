import {
  configureStore,
  type Action,
  type ThunkAction,
} from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import currentUserSlice from "../features/user/currentUserSlice";
import usersSlice from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    currentUser: currentUserSlice,
    users: usersSlice,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
