import BrandPanel from "../components/authentication/components/BrandPanel";
import RegisterPanel from "../components/authentication/components/register/RegisterPanel";
import { StyledAuthPage } from "../components/authentication/styles";

export default function RegisterPage() {
  return (
    <StyledAuthPage>
      <RegisterPanel />
      <BrandPanel />
    </StyledAuthPage>
  );
}
