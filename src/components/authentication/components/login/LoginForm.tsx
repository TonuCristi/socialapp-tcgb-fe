import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router";
import styled from "styled-components";

import Label from "../../../common/input/Label";
import Input from "../../../common/input/Input";
import HidePasswordInput from "../../../common/input/HidePasswordInput";
import { HiMiniEnvelope } from "react-icons/hi2";
import { StyledFormFieldsWrapper } from "../../../styles/styles";
import { StyledAuthForm, StyledLoginRegisterLink } from "../styles";
import { StyledFormField } from "../../../common/input/styles";

import type { LoginForm } from "../../../../types/User.type";
import { loginFormSchema } from "../../../../schemas/loginForm.schema";
import { useLogin } from "../../hooks/useLogin";
import Message from "../../../common/Message";
import Button from "../../../common/Button";

export default function LoginForm() {
  const methods = useForm<LoginForm>({
    defaultValues: {
      email: "john.johnson@gmail.com",
      password: "P@rola1234",
    },
    resolver: zodResolver(loginFormSchema),
  });
  const { loginUser, isLoading } = useLogin();

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<LoginForm> = (data) => loginUser(data);

  return (
    <FormProvider {...methods}>
      <StyledAuthForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFormFieldsWithMargin>
          <StyledFormField>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="text"
              name="email"
              placeholder="Enter your email..."
              leftIcon={<HiMiniEnvelope />}
            />
            {errors.email && (
              <Message variant="error">{errors.email.message}</Message>
            )}
          </StyledFormField>
          <StyledFormField>
            <Label htmlFor="password">Password</Label>
            <HidePasswordInput
              id="password"
              name="password"
              placeholder="Enter your password..."
            />
            {errors.password && (
              <Message variant="error">{errors.password.message}</Message>
            )}
          </StyledFormField>
        </StyledFormFieldsWithMargin>
        <StyledForgotPasswordLink to="/forgot-password">
          Forgot password?
        </StyledForgotPasswordLink>
        <Button disabled={isLoading}>Login</Button>
        <StyledLoginRegisterLink to="/register">
          <span>Don't have an account?</span> Register
        </StyledLoginRegisterLink>
      </StyledAuthForm>
    </FormProvider>
  );
}

const StyledFormFieldsWithMargin = styled(StyledFormFieldsWrapper)`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StyledForgotPasswordLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gray300};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  align-self: end;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;
