import { Link } from "react-router";
import styled from "styled-components";

export const StyledAuthPage = styled.div`
  height: 100dvh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.secondary};
  overflow: hidden;

  @media (width < ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const StyledAuthPanel = styled.main`
  padding: ${({ theme }) => theme.spacing["9xl"]};
  width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  @media (width < ${({ theme }) => theme.breakpoints.xl}) {
    padding: ${({ theme }) => theme.spacing["7xl"]};
    width: 100%;
    margin: 0;
  }

  @media (width < ${({ theme }) => theme.breakpoints.lg}) {
    width: 70%;
    margin: 0 auto;
  }

  @media (width < ${({ theme }) => theme.breakpoints.md}) {
    width: 90%;
  }

  @media (width < ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing["5xl"]};
    width: 100%;
  }

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    padding: ${({ theme }) => theme.spacing["3xl"]};
  }

  @media (width < ${({ theme }) => theme.breakpoints.xxs}) {
    padding: ${({ theme }) => theme.spacing["md"]};
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

  @media (width < ${({ theme }) => theme.breakpoints.xxs}) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  }
`;

export const StyledMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledFormFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
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
