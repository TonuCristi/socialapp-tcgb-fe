import styled from "styled-components";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

import Loader from "./Loader";

import { useFetchLoggedUser } from "./authentication/hooks/useFetchLoggedUser";
import Sidebar from "./sidebar/Sidebar";

export default function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoading: isCurrentUserLoading } = useFetchLoggedUser();

  const pathnames =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/forgot-password" ||
    location.pathname === "/reset-password";

  useEffect(() => {
    if (pathnames) {
      navigate("/");
    }
  }, [navigate, pathnames]);

  if (pathnames || isCurrentUserLoading) {
    return (
      <StyledLoaderWrapper>
        <Loader />
      </StyledLoaderWrapper>
    );
  }

  return (
    <StyledApp>
      <Sidebar />
      <Outlet />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 25fr 50fr 25fr;
  height: 100dvh;

  @media (width < ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: auto 65fr 10fr;
  }

  @media (width < ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: auto 1fr;
  }

  @media (width < ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledLoaderWrapper = styled.div`
  width: ${({ theme }) => theme.width.full};
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
