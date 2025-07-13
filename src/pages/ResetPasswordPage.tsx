import ResetPasswordForm from "../components/authentication/forgotPassword/ResetPasswordForm";
import {
  StyledForgotPasswordPage,
  StyledMessage,
  StyledTitle,
} from "../components/authentication/styles";

export default function ResetPasswordPage() {
  return (
    <StyledForgotPasswordPage>
      <StyledTitle>Reset password</StyledTitle>
      <StyledMessage>Please enter your new password below.</StyledMessage>
      <ResetPasswordForm />
    </StyledForgotPasswordPage>
  );
}
