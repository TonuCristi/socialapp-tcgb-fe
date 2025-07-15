import styled from "styled-components";

import Button from "../Button";
import { Link } from "react-router";

export const StyledSidebarButton = styled(Button)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
  justify-content: start;
  width: 100%;
  transition: all 0.1s;
  padding: ${({ theme }) =>
    `${theme.spacing.sm} ${theme.spacing.md} ${theme.spacing.sm} ${theme.spacing.sm}`};

  :first-child {
    color: ${({ theme }) => theme.colors.accent};
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  }

  &:hover :first-child {
    border-radius: ${({ theme }) => theme.borderRadius.full};
    background-color: ${({ theme }) => theme.colors.shadowBlue};
    box-shadow: 0 0 0.4rem 0.4rem ${({ theme }) => theme.colors.shadowBlue};
  }

  @media (width > ${({ theme }) => theme.breakpoints.md}) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.zinc800};
      border-radius: ${({ theme }) => theme.borderRadius["3xl"]};
    }
  }

  @media (width < ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.sm};
    justify-content: center;
  }

  @media (width < ${({ theme }) => theme.breakpoints.sm}) {
    width: auto;
  }
`;

export const StyledSidebarLink = styled(Link)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
  justify-content: start;
  width: 100%;
  transition: all 0.1s;
  padding: ${({ theme }) =>
    `${theme.spacing.sm} ${theme.spacing.md} ${theme.spacing.sm} ${theme.spacing.sm}`};

  :first-child {
    color: ${({ theme }) => theme.colors.accent};
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  }

  &:hover :first-child {
    border-radius: ${({ theme }) => theme.borderRadius.full};
    background-color: ${({ theme }) => theme.colors.shadowBlue};
    box-shadow: 0 0 0.4rem 0.4rem ${({ theme }) => theme.colors.shadowBlue};
  }

  @media (width > ${({ theme }) => theme.breakpoints.md}) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.zinc800};
      border-radius: ${({ theme }) => theme.borderRadius["3xl"]};
    }
  }

  @media (width < ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.sm};
    justify-content: center;
  }

  @media (width < ${({ theme }) => theme.breakpoints.sm}) {
    width: auto;
  }
`;

export const StyledSidebarItemText = styled.p`
  @media (width < ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;
