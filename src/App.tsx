import { Suspense, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import AppLayout from "./components/layouts/AppLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import Loader from "./components/common/Loader";
import { StyledLoaderWrapper } from "./components/styles/styles";

import { useAppSelector } from "./app/hooks";
import { selectAuthIsLogged } from "./features/auth/authSlice";
import { useLogout } from "./components/authentication/hooks/useLogout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const queryClient = new QueryClient();

export default function App() {
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

  return (
    <Suspense
      fallback={
        <StyledLoaderWrapper>
          <Loader />
        </StyledLoaderWrapper>
      }
    >
      {isLogged ? (
        <QueryClientProvider client={queryClient}>
          <AppLayout />
          <ReactQueryDevtools />
        </QueryClientProvider>
      ) : (
        <AuthLayout />
      )}
    </Suspense>
  );
}
