import styled from "styled-components";
import { Outlet } from "react-router";

import Sidebar from "./components/header/Sidebar";

function App() {
  return (
    <StyledApp>
      <Sidebar />
      <Outlet />
    </StyledApp>
  );
}

export default App;

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
