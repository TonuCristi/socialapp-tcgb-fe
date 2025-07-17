import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router";
import styled from "styled-components";

import FormField from "../../../input/FormField";
import Label from "../../../input/Label";
import Input from "../../../input/Input";
import Message from "../../../Message";
import HidePasswordInput from "../../../input/HidePasswordInput";
import Button from "../../../Button";
import { HiMiniEnvelope } from "react-icons/hi2";
import { StyledFormFieldsWrapper } from "../../../styles/styles";
import { StyledAuthForm, StyledLoginRegisterLink } from "../styles";

import type { LoginForm } from "../../../../types/User.type";
import { loginFormSchema } from "../../../../schemas/loginForm.schema";
import { useLogin } from "../../hooks/useLogin";

export default function LoginForm() {
  const methods = useForm<LoginForm>({
    defaultValues: {
      email: "chrisdev2002@gmail.com",
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
        <StyledFormFieldsSpaceWrapper>
          <StyledFormFieldsWrapperWithMargin>
            <FormField>
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
            </FormField>
            <FormField>
              <Label htmlFor="password">Password</Label>
              <HidePasswordInput
                id="password"
                name="password"
                placeholder="Enter your password..."
              />
              {errors.password && (
                <Message variant="error">{errors.password.message}</Message>
              )}
            </FormField>
          </StyledFormFieldsWrapperWithMargin>
        </StyledFormFieldsSpaceWrapper>
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

const StyledFormFieldsSpaceWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StyledForgotPasswordLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gray300};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  align-self: end;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const StyledFormFieldsWrapperWithMargin = styled(StyledFormFieldsWrapper)`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;
