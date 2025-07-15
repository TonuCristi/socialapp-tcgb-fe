import styled from "styled-components";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

import Sidebar from "./header/Sidebar";
import Loader from "./Loader";

import { useFetchLoggedUser } from "./authentication/hooks/useFetchLoggedUser";

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
  grid-template-columns: 20rem 60fr 25fr;
  height: 100dvh;

  @media (width < ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: 15rem 60fr 25fr;
  }

  @media (width < ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: auto 60fr 25fr;
  }

  @media (width < ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledLoaderWrapper = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
