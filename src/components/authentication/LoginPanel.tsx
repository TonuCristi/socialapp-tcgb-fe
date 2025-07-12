import styled from "styled-components";
import LoginForm from "./login/LoginForm";

export default function LoginPanel() {
  return (
    <StyledLoginPanel>
      <StyledAppName>tcgb</StyledAppName>
      <StyledTitle>
        Hello,
        <br />
        Welcome back
      </StyledTitle>
      <StyledMessage>
        Your space to share moments, ideas, and stories.
      </StyledMessage>
      <LoginForm />
    </StyledLoginPanel>
  );
}

const StyledLoginPanel = styled.main`
  padding: ${({ theme }) => theme.spacing["9xl"]};

  @media (width < ${({ theme }) => theme.breakpoints.xl}) {
    width: 100%;
  }

  @media (width < ${({ theme }) => theme.breakpoints.lg}) {
    width: 80%;
    margin: 0 auto;
  }

  @media (width < ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing["7xl"]};
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

const StyledAppName = styled.h3`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const StyledTitle = styled.h2`
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
`;

const StyledMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;
