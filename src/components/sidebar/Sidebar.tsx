import styled from "styled-components";

import Navbar from "./Navbar";
import { Link } from "react-router";

export default function Sidebar() {
  return (
    <StyledAside>
      <StyledLogo to="/">tcgb</StyledLogo>
      <Navbar />
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
  height: ${({ theme }) => theme.height.screen};
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
    height: ${({ theme }) => theme.height.min};
    flex-direction: row;
    top: auto;
    bottom: 0;
    z-index: 10;
    border-right: none;
    border-top: 0.1rem solid ${({ theme }) => theme.colors.accent};
    padding: ${({ theme }) => theme.spacing.sm};
    gap: ${({ theme }) => theme.spacing.sm};
  }

  @media (width < ${({ theme }) => theme.breakpoints["2xs"]}) {
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xs}`};
  }
`;

const StyledLogo = styled(Link)`
  display: inline-block;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing["2xl"]};
  padding: 0 ${({ theme }) => theme.spacing.sm};

  @media (width < ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;
