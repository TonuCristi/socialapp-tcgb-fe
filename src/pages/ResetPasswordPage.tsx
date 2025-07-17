import ResetPasswordForm from "../components/authentication/components/forgotPassword/ResetPasswordForm";
import {
  StyledForgotPasswordPage,
  StyledMessage,
  StyledTitle,
} from "../components/authentication/components/styles";

export default function ResetPasswordPage() {
  return (
    <StyledForgotPasswordPage>
      <StyledTitle>Reset password</StyledTitle>
      <StyledMessage>Please enter your new password below.</StyledMessage>
      <ResetPasswordForm />
    </StyledForgotPasswordPage>
  );
}
