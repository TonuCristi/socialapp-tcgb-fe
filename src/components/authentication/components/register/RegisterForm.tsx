import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";

import FormField from "../../../input/FormField";
import Label from "../../../input/Label";
import Input from "../../../input/Input";
import Message from "../../../Message";
import HidePasswordInput from "../../../input/HidePasswordInput";
import Button from "../../../Button";
import { HiMiniEnvelope, HiMiniUser } from "react-icons/hi2";
import { StyledAuthForm, StyledLoginRegisterLink } from "../styles";
import { StyledFormFieldsWrapper } from "../../../styles/styles";

import type { RegisterForm } from "../../../../types/User.type";
import { registerFormSchema } from "../../../../schemas/registerForm.schema";
import { useRegister } from "../../hooks/useRegister";

const inputs = [
  {
    label: "Username",
    htmlFor: "username",
    type: "text",
    name: "username",
    placeholder: "Enter your username...",
    leftIcon: <HiMiniUser />,
  },
  {
    label: "Email",
    htmlFor: "email",
    type: "text",
    name: "email",
    placeholder: "Enter your email...",
    leftIcon: <HiMiniEnvelope />,
  },
] as const;

export default function RegisterForm() {
  const methods = useForm<RegisterForm>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(registerFormSchema),
  });
  const { registerUser, isLoading } = useRegister();

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<RegisterForm> = (data) => registerUser(data);

  return (
    <FormProvider {...methods}>
      <StyledAuthForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFormFieldsWrapperWithMargin>
          {inputs.map(
            ({ label, htmlFor, type, name, placeholder, leftIcon }) => (
              <FormField key={name}>
                <Label htmlFor={htmlFor}>{label}</Label>
                <Input
                  id={htmlFor}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  leftIcon={leftIcon}
                />
                {errors[name] && (
                  <Message variant="error">{errors[name].message}</Message>
                )}
              </FormField>
            )
          )}
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
        <Button disabled={isLoading}>Register</Button>
        <StyledLoginRegisterLink to="/login">
          <span>Already have an account?</span> Login
        </StyledLoginRegisterLink>
      </StyledAuthForm>
    </FormProvider>
  );
}

const StyledFormFieldsWrapperWithMargin = styled(StyledFormFieldsWrapper)`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;
