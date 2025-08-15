import RegisterForm from "./RegisterForm";
import {
  StyledAppName,
  StyledAuthPanel,
  StyledMessage,
  StyledTitle,
} from "../styles";

export default function RegisterPanel() {
  return (
    <StyledAuthPanel>
      <StyledAppName>tcgb</StyledAppName>
      <StyledTitle>Register now</StyledTitle>
      <StyledMessage>
        Your space to share moments, ideas, and stories.
      </StyledMessage>
      <RegisterForm />
    </StyledAuthPanel>
  );
}
