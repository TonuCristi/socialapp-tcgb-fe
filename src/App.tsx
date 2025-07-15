import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import AppLayout from "./components/AppLayout";
import AuthLayout from "./components/AuthLayout";

import { useAppSelector } from "./app/hooks";
import { selectAuthIsLogged } from "./features/auth/authSlice";
import { useLogout } from "./components/authentication/hooks/useLogout";

function App() {
  const isLogged = useAppSelector(selectAuthIsLogged);
  const { logoutUser } = useLogout();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);

      if (decoded.exp && decoded.exp * 1000 < Date.now()) {
        logoutUser();
      }
    }
  }, [logoutUser]);

  return isLogged ? <AppLayout /> : <AuthLayout />;
}

export default App;
