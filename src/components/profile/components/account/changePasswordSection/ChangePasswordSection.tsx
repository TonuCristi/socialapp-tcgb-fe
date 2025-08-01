import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";

import Title from "../../../../common/Title";
import Message from "../../../../common/Message";
import Button from "../../../../common/Button";
import Label from "../../../../common/input/Label";
import HidePasswordInput from "../../../../common/input/HidePasswordInput";
import { StyledDivider, StyledProfileSection } from "../../styles";
import { StyledFormFieldsWrapper } from "../../../../styles/styles";
import { StyledFormField } from "../../../../common/input/styles";

import type { ChangePasswordForm } from "../../../../../types/User.type";
import { changePasswordFormSchema } from "../../../../../schemas/changePasswordForm.schema";
import { useChangePassword } from "../../../hooks/useChangePassword";

const inputs = [
  {
    label: "New password",
    htmlFor: "newPassword",
    name: "newPassword",
    placeholder: "Enter your new password...",
  },
  {
    label: "Confirm password",
    htmlFor: "confirmPassword",
    name: "confirmPassword",
    placeholder: "Confirm your new password...",
  },
  {
    label: "Old password",
    htmlFor: "oldPassword",
    name: "oldPassword",
    placeholder: "Enter your old password...",
  },
] as const;

export default function ChangePasswordSection() {
  const methods = useForm<ChangePasswordForm>({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
      oldPassword: "",
    },
    resolver: zodResolver(changePasswordFormSchema),
  });

  const { changeUserPassword, isLoading } = useChangePassword();

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<ChangePasswordForm> = (data) =>
    changeUserPassword(data);

  return (
    <StyledChangePasswordSection>
      <StyledHeader>
        <Title variant="small">Change password</Title>
      </StyledHeader>
      <StyledDivider />
      <FormProvider {...methods}>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
          <Button disabled={isLoading}>Save</Button>
        </StyledForm>
      </FormProvider>
    </StyledChangePasswordSection>
  );
}

const StyledChangePasswordSection = styled(StyledProfileSection)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    flex-direction: column;
    align-items: start;
  }
`;

const StyledFormFieldsWrapperWithMargin = styled(StyledFormFieldsWrapper)`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.width.full};
`;
