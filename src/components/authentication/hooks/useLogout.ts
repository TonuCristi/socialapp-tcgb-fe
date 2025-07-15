import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../app/hooks";
import { logout } from "../../../features/auth/authSlice";
import { deleteUser } from "../../../features/user/currentUserSlice";

export function useLogout() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function logoutUser() {
    dispatch(logout());
    dispatch(deleteUser());
    localStorage.removeItem("token");
    navigate("/login");
  }

  return { logoutUser };
}
