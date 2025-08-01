import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";

import Label from "../../../common/input/Label";
import HidePasswordInput from "../../../common/input/HidePasswordInput";
import Message from "../../../common/Message";
import Button from "../../../common/Button";
import { StyledAuthForm, StyledLoginRegisterLink } from "../styles";
import { StyledFormFieldsWrapper } from "../../../styles/styles";
import { StyledFormField } from "../../../common/input/styles";

import type { ResetPasswordForm } from "../../../../types/User.type";
import { resetPasswordFormSchema } from "../../../../schemas/resetPasswordForm.schema";

const inputs = [
  {
    label: "New password",
    htmlFor: "newPassword",
    name: "newPassword",
    placeholder: "New password...",
  },
  {
    label: "Confirm password",
    htmlFor: "confirmPassword",
    name: "confirmPassword",
    placeholder: "Confirm password...",
  },
] as const;

export default function ResetPasswordForm() {
  const methods = useForm<ResetPasswordForm>({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
    resolver: zodResolver(resetPasswordFormSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<ResetPasswordForm> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <StyledAuthForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFormFieldsWrapperWithMargin>
          {inputs.map(({ label, htmlFor, name, placeholder }) => (
            <StyledFormField key={name}>
              <Label htmlFor={htmlFor}>{label}</Label>
              <HidePasswordInput
                id={htmlFor}
                name={name}
                placeholder={placeholder}
              />
              {errors[name] && (
                <Message variant="error">{errors[name].message}</Message>
              )}
            </StyledFormField>
          ))}
        </StyledFormFieldsWrapperWithMargin>
        <Button>Reset</Button>
        <StyledLoginRegisterLink to="/login">
          <span>Back to</span> login
        </StyledLoginRegisterLink>
      </StyledAuthForm>
    </FormProvider>
  );
}

const StyledFormFieldsWrapperWithMargin = styled(StyledFormFieldsWrapper)`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;
