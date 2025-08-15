import styled from "styled-components";
import { useEffect, useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { useFetchLoggedUser } from "../authentication/hooks/useFetchLoggedUser";

import Loader from "../common/Loader";
import Sidebar from "../sidebar/Sidebar";
import { StyledLoaderWrapper } from "../styles/styles";

export default function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoading: isCurrentUserLoading } = useFetchLoggedUser();

  const pathnames = useMemo(() => {
    return (
      location.pathname === "/login" ||
      location.pathname === "/register" ||
      location.pathname === "/forgot-password" ||
      location.pathname === "/reset-password"
    );
  }, [location.pathname]);

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
      <StyledOutletWrapper>
        <Outlet />
      </StyledOutletWrapper>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 25fr 50fr 25fr;

  @media (width < ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: auto 65fr 10fr;
  }

  @media (width < ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: auto 1fr;
  }

  @media (width < ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    height: ${({ theme }) => theme.height.screen};
  }
`;

const StyledOutletWrapper = styled.div`
  height: ${({ theme }) => theme.height.full};

  @media (width < ${({ theme }) => theme.breakpoints.sm}) {
    grid-row: 1;
  }
`;
