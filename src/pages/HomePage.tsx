import styled from "styled-components";

export default function HomePage() {
  return <StyledHomePage>Home page</StyledHomePage>;
}

const StyledHomePage = styled.main`
  max-width: ${({ theme }) => theme.width["5xl"]};
  min-height: 100dvh;
  margin: 0 auto;
  border-left: 0.1rem solid ${({ theme }) => theme.colors.accent};
  border-right: 0.1rem solid ${({ theme }) => theme.colors.accent};
  padding: ${({ theme }) => theme.spacing.md};

  @media (width < ${({ theme }) => theme.breakpoints.lg}) {
    border-left: none;
    border-right: none;
  }
`;
