import BrandPanel from "../components/authentication/BrandPanel";
import RegisterPanel from "../components/authentication/register/RegisterPanel";
import { StyledAuthPage } from "../components/authentication/styles";

export default function RegisterPage() {
  return (
    <StyledAuthPage>
      <RegisterPanel />
      <BrandPanel />
    </StyledAuthPage>
  );
}
