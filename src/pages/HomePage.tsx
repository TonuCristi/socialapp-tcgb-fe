import styled from "styled-components";

export default function HomePage() {
  return <StyledHomePage>Home page</StyledHomePage>;
}

const StyledHomePage = styled.main`
  width: ${({ theme }) => theme.width["5xl"]};
  min-height: 100dvh;
  margin: 0 auto;
  border-left: 0.15rem solid ${({ theme }) => theme.colors.accent};
  border-right: 0.15rem solid ${({ theme }) => theme.colors.accent};
`;
