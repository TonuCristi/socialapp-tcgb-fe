import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router";
import styled from "styled-components";

import Input from "../../input/Input";
import FormField from "../../input/FormField";
import Label from "../../input/Label";
import Message from "../../Message";
import Button from "../../Button";
import HidePasswordInput from "../../input/HidePasswordInput";
import { HiMiniEnvelope } from "react-icons/hi2";
import {
  StyledForm,
  StyledFormFieldsWrapper,
  StyledLoginRegisterLink,
} from "../styles";

import { loginFormSchema } from "../../../schemas/loginForm.schema";
import type { LoginForm } from "../../../types/User.type";

export default function LoginForm() {
  const methods = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginFormSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFormFieldsSpaceWrapper>
          <StyledFormFieldsWrapper>
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
          </StyledFormFieldsWrapper>
        </StyledFormFieldsSpaceWrapper>
        <StyledForgotPasswordLink to="/forgot-password">
          Forgot password?
        </StyledForgotPasswordLink>
        <Button>Login</Button>
        <StyledLoginRegisterLink to="/register">
          <span>Don't have an account?</span> Register
        </StyledLoginRegisterLink>
      </StyledForm>
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
