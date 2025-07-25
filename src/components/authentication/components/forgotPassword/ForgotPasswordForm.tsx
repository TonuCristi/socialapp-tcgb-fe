import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";

import Label from "../../../input/Label";
import Input from "../../../input/Input";
import Message from "../../../Message";
import Button from "../../../Button";
import { StyledAuthForm, StyledLoginRegisterLink } from "../styles";
import { HiMiniEnvelope } from "react-icons/hi2";
import { StyledFormField } from "../../../input/styles";

import type { ForgotPasswordForm } from "../../../../types/User.type";
import { forgotPasswordFormSchema } from "../../../../schemas/forgotPasswordForm.schema";

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
      <StyledAuthForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInputWrapper>
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
        </StyledInputWrapper>
        <Button>Send</Button>
        <StyledLoginRegisterLink to="/login">
          <span>Back to</span> login
        </StyledLoginRegisterLink>
      </StyledAuthForm>
    </FormProvider>
  );
}

const StyledInputWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;
