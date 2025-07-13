import styled from "styled-components";

import Navbar from "./Navbar";

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogo />
      <Navbar />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.accent};
  padding: ${({ theme }) => theme.spacing.md};
  display: grid;
  grid-template-columns: 25fr 50fr 25fr;
  justify-items: center;
  align-items: center;
`;

const StyledLogo = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  justify-self: start;
`;
