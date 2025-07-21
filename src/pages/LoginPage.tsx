import BrandPanel from "../components/authentication/components/BrandPanel";
import LoginPanel from "../components/authentication/components/login/LoginPanel";
import { StyledAuthPage } from "../components/authentication/components/styles";

export default function LoginPage() {
  return (
    <StyledAuthPage>
      <LoginPanel />
      <BrandPanel />
    </StyledAuthPage>
  );
}
