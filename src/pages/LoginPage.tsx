import styled from "styled-components";
import LoginPanel from "../components/authentication/LoginPanel";
import BrandPanel from "../components/authentication/BrandPanel";

export default function LoginPage() {
  return (
    <StyledAuthPage>
      <LoginPanel />
      <BrandPanel />
    </StyledAuthPage>
  );
}

const StyledAuthPage = styled.div`
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
