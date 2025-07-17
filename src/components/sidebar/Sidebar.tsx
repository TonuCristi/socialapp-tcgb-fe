import styled from "styled-components";

import Navbar from "./Navbar";
import ProfileLink from "./ProfileLink";
import LogoutButton from "./LogoutButton";

export default function Sidebar() {
  return (
    <StyledAside>
      <StyledLogo>tcgb</StyledLogo>
      <Navbar />
      <ProfileLink />
      <LogoutButton />
    </StyledAside>
  );
}

const StyledAside = styled.aside`
  border-right: 0.1rem solid ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => `${theme.spacing["2xl"]} ${theme.spacing.md}`};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  align-items: start;
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  width: 20rem;

  @media (width < ${({ theme }) => theme.breakpoints.xl}) {
    width: 15rem;
  }

  @media (width < ${({ theme }) => theme.breakpoints.lg}) {
    width: auto;
  }

  @media (width < ${({ theme }) => theme.breakpoints.md}) {
    align-items: center;
    padding: ${({ theme }) => `${theme.spacing["2xl"]} ${theme.spacing.sm}`};
  }

  @media (width < ${({ theme }) => theme.breakpoints.sm}) {
    width: ${({ theme }) => theme.width.full};
    height: min-content;
    flex-direction: row;
    top: auto;
    bottom: 0;
    z-index: 10;
    border-right: none;
    border-top: 0.1rem solid ${({ theme }) => theme.colors.accent};
    padding: ${({ theme }) => theme.spacing.sm};
    gap: ${({ theme }) => theme.spacing.sm};
  }

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

const StyledLogo = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing["2xl"]};
  padding: 0 ${({ theme }) => theme.spacing.sm};

  @media (width < ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;
