import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  StyledForm,
  StyledFormFieldsSpaceWrapper,
  StyledFormFieldsWrapper,
  StyledLoginRegisterLink,
} from "../../styles";
import FormField from "../../../input/FormField";
import Label from "../../../input/Label";
import HidePasswordInput from "../../../input/HidePasswordInput";
import Message from "../../../Message";
import Button from "../../../Button";

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
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledFormFieldsSpaceWrapper>
          <StyledFormFieldsWrapper>
            {inputs.map(({ label, htmlFor, name, placeholder }) => (
              <FormField key={name}>
                <Label htmlFor={htmlFor}>{label}</Label>
                <HidePasswordInput
                  id={htmlFor}
                  name={name}
                  placeholder={placeholder}
                />
                {errors[name] && (
                  <Message variant="error">{errors[name].message}</Message>
                )}
              </FormField>
            ))}
          </StyledFormFieldsWrapper>
        </StyledFormFieldsSpaceWrapper>
        <Button>Reset</Button>
        <StyledLoginRegisterLink to="/login">
          <span>Back to</span> login
        </StyledLoginRegisterLink>
      </StyledForm>
    </FormProvider>
  );
}
