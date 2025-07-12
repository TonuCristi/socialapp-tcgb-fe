import {
  StyledAppName,
  StyledAuthPanel,
  StyledMessage,
  StyledTitle,
} from "../styles";
import RegisterForm from "./RegisterForm";

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
