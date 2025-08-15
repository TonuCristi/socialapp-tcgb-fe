import LoginForm from "./LoginForm";
import {
  StyledAppName,
  StyledAuthPanel,
  StyledMessage,
  StyledTitle,
} from "../styles";

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
