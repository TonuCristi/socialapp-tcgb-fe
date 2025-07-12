import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";

import { StyledForm, StyledLoginRegisterLink } from "../styles";
import Message from "../../Message";
import Button from "../../Button";
import FormField from "../../input/FormField";
import Label from "../../input/Label";
import Input from "../../input/Input";
import { HiMiniEnvelope } from "react-icons/hi2";

import { forgotPasswordFormSchema } from "../../../schemas/forgotPasswordForm.schema";
import type { ForgotPasswordForm } from "../../../types/User.type";

export default function ForgotPassword() {
  const methods = useForm<ForgotPasswordForm>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(forgotPasswordFormSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<ForgotPasswordForm> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInputWrapper>
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
        </StyledInputWrapper>
        <Button>Send</Button>
        <StyledLoginRegisterLink to="/login">
          <span>Back to</span> login
        </StyledLoginRegisterLink>
      </StyledForm>
    </FormProvider>
  );
}

const StyledInputWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;
