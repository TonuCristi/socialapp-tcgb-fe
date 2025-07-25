import {
  StyledAppName,
  StyledAuthPanel,
  StyledMessage,
  StyledTitle,
} from "../styles";
import LoginForm from "./LoginForm";

export default function LoginPanel() {
  return (
    <StyledAuthPanel>
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
    </StyledAuthPanel>
  );
}
