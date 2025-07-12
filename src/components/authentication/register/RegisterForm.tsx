import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../../input/Input";
import FormField from "../../input/FormField";
import Label from "../../input/Label";
import Message from "../../Message";
import Button from "../../Button";

import type { RegisterForm } from "../../../types/User.type";
import { registerFormSchema } from "../../../schemas/registerForm.schema";
import {
  StyledForm,
  StyledFormFieldsWrapper,
  StyledLoginRegisterLink,
} from "../styles";
import styled from "styled-components";

const inputs = [
  {
    label: "Username",
    htmlFor: "username",
    name: "username",
    placeholder: "Enter your username...",
  },
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

export default function RegisterForm() {
  const methods = useForm<RegisterForm>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(registerFormSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<RegisterForm> = (data) => {
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
        <Button>Register</Button>
        <StyledLoginRegisterLink to="/login">
          <span>Already have an account?</span> Login
        </StyledLoginRegisterLink>
      </StyledForm>
    </FormProvider>
  );
}

const StyledFormFieldsSpaceWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;
