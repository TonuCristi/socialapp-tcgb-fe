import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router";
import styled from "styled-components";

import Input from "../../input/Input";
import FormField from "../../input/FormField";
import Label from "../../input/Label";
import Message from "../../Message";
import Button from "../../Button";

import { loginFormSchema } from "../../../schemas/loginForm.schema";
import type { LoginForm } from "../../../types/User.type";
import {
  StyledForm,
  StyledFormFieldsWrapper,
  StyledLoginRegisterLink,
} from "../styles";
import { useAppDispatch } from "../../../app/hooks";
import { login } from "../../../features/auth/authSlice";

const inputs = [
  {
    label: "Email",
    htmlFor: "email",
    name: "email",
    placeholder: "Enter your email...",
  },
  {
    label: "Password",
    htmlFor: "password",
    name: "password",
    placeholder: "Enter your password...",
  },
] as const;

export default function LoginForm() {
  const methods = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginFormSchema),
  });
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    dispatch(login(data));
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFormFieldsSpaceWrapper>
          <StyledFormFieldsWrapper>
            {inputs.map(({ label, htmlFor, name, placeholder }) => (
              <FormField key={name}>
                <Label htmlFor={htmlFor}>{label}</Label>
                <Input id={htmlFor} name={name} placeholder={placeholder} />
                {errors[name] && (
                  <Message variant="error">{errors[name].message}</Message>
                )}
              </FormField>
            ))}
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
