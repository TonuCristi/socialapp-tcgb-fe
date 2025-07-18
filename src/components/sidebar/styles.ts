import styled from "styled-components";

import Button from "../Button";

export const StyledSidebarButtonLink = styled(Button)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
  justify-content: start;
  width: ${({ theme }) => theme.width.full};
  transition: all 0.1s;
  padding: ${({ theme }) =>
    `${theme.spacing.sm} ${theme.spacing.md} ${theme.spacing.sm} ${theme.spacing.sm}`};

  :first-child {
    color: ${({ theme }) => theme.colors.accent};
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    transition: all 0.1s;
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
`;

export const StyledSidebarItemText = styled.p`
  @media (width < ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;
