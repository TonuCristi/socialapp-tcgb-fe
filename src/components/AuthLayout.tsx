import { useEffect } from "react";
import styled from "styled-components";
import { Outlet, useLocation, useNavigate } from "react-router";

import Loader from "./Loader";

export default function AuthLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const pathnames =
    location.pathname === "/" ||
    location.pathname === "/chat" ||
    location.pathname === "/profile";

  useEffect(() => {
    if (pathnames) {
      navigate("/login");
    }
  }, [navigate, pathnames]);

  if (pathnames) {
    return (
      <StyledLoaderWrapper>
        <Loader />
      </StyledLoaderWrapper>
    );
  }

  return <Outlet />;
}

const StyledLoaderWrapper = styled.div`
  width: ${({ theme }) => theme.width.full};
  height: ${({ theme }) => theme.height.screen};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
