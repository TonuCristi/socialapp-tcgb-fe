import type { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

export default function Page({ children, ...props }: Props) {
  return <StyledMain {...props}>{children}</StyledMain>;
}

const StyledMain = styled.main`
  height: 100%;
  width: ${({ theme }) => theme.width.xl};
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.sm}`};

  @media (width < ${({ theme }) => theme.breakpoints.xl}) {
    width: 75%;
  }

  @media (width < ${({ theme }) => theme.breakpoints.lg}) {
    width: 80%;
  }

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    width: 90%;
  }

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    width: ${({ theme }) => theme.width.full};
  }
`;
