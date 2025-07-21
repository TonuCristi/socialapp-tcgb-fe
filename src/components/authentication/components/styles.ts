import { Link } from "react-router";
import styled from "styled-components";

export const StyledAuthPage = styled.div`
  height: 100dvh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  overflow: hidden;

  @media (width < ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const StyledAuthPanel = styled.main`
  width: ${({ theme }) => theme.width.md};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  @media (width < ${({ theme }) => theme.breakpoints.xl}) {
    width: 70%;
  }

  @media (width < ${({ theme }) => theme.breakpoints.lg}) {
    width: 50%;
  }

  @media (width < ${({ theme }) => theme.breakpoints.md}) {
    width: 60%;
  }

  @media (width < ${({ theme }) => theme.breakpoints.sm}) {
    width: 70%;
  }

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    width: 80%;
  }

  @media (width < ${({ theme }) => theme.breakpoints["2xs"]}) {
    width: 90%;
  }
`;

export const StyledAppName = styled.h3`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  @media (width < ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  }

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  }

  @media (width < ${({ theme }) => theme.breakpoints["2xs"]}) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  }
`;

export const StyledMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const StyledAuthForm = styled.form`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.width.full};
`;

export const StyledLoginRegisterLink = styled(Link)`
  margin-top: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  align-self: center;

  span {
    color: ${({ theme }) => theme.colors.gray300};
  }
`;

export const StyledForgotPasswordPage = styled.main`
  height: 100dvh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.sm};
  width: ${({ theme }) => theme.width.md};
  margin: 0 auto;

  @media (width < ${({ theme }) => theme.breakpoints.xl}) {
    width: 45%;
  }

  @media (width < ${({ theme }) => theme.breakpoints.lg}) {
    width: 55%;
  }

  @media (width < ${({ theme }) => theme.breakpoints.md}) {
    width: 70%;
  }

  @media (width < ${({ theme }) => theme.breakpoints.sm}) {
    width: 80%;
  }

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    width: 90%;
  }
`;
