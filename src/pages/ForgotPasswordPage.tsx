import ForgotPassword from "../components/authentication/components/forgotPassword/ForgotPasswordForm";
import {
  StyledForgotPasswordPage,
  StyledMessage,
  StyledTitle,
} from "../components/authentication/styles";

export default function ForgotPasswordPage() {
  return (
    <StyledForgotPasswordPage>
      <StyledTitle>Forgot password?</StyledTitle>
      <StyledMessage>
        Enter your email address below, and we'll send you a link to reset your
        password.
      </StyledMessage>
      <ForgotPassword />
    </StyledForgotPasswordPage>
  );
}
