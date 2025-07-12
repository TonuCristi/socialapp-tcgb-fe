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
        <StyledForgotPasswordLink to="/forgot-password">
          Forgot password?
        </StyledForgotPasswordLink>
        <Button>Login</Button>
        <StyledRegisterLink to="/register">
          <span>Don't have an account?</span> Register
        </StyledRegisterLink>
      </StyledForm>
    </FormProvider>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 20rem;

  @media (width < ${({ theme }) => theme.breakpoints["2xl"]}) {
    width: 60%;
  }

  @media (width < ${({ theme }) => theme.breakpoints["xl"]}) {
    width: 80%;
  }

  @media (width < ${({ theme }) => theme.breakpoints["lg"]}) {
    width: 100%;
  }
`;

const StyledFormFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const StyledForgotPasswordLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray300};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  align-self: end;
`;

const StyledRegisterLink = styled(Link)`
  margin-top: ${({ theme }) => theme.spacing.md};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  align-self: center;

  span {
    color: ${({ theme }) => theme.colors.gray300};
  }
`;
