import { useEffect, useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

import Loader from "../common/Loader";
import { StyledLoaderWrapper } from "../styles/styles";

export default function AuthLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const pathnames = useMemo(() => {
    return (
      location.pathname === "/" ||
      location.pathname === "/chat" ||
      location.pathname === "/profile"
    );
  }, [location.pathname]);

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
