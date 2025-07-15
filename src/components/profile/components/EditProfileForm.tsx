import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { zodResolver } from "@hookform/resolvers/zod";

import Title from "../../Title";
import FormField from "../../input/FormField";
import Label from "../../input/Label";
import Input from "../../input/Input";
import Message from "../../Message";
import Button from "../../Button";
import {
  HiMiniCalendar,
  HiMiniEnvelope,
  HiMiniPhone,
  HiMiniUser,
} from "react-icons/hi2";
import { StyledFormFieldsWrapper } from "../../authentication/styles";

import type { EditProfileForm } from "../../../types/User.type";
import { editProfileFormSchema } from "../../../schemas/editProfileForm.schema";
import { useAppSelector } from "../../../app/hooks";
import { selectCurrentUser } from "../../../features/user/currentUserSlice";
import { useEditUser } from "../hooks/useEditUser";

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
  {
    label: "Birth date",
    htmlFor: "birthDate",
    type: "date",
    name: "birthDate",
    placeholder: "Enter your birthDate...",
    leftIcon: <HiMiniCalendar />,
  },
  {
    label: "Phone number",
    htmlFor: "phoneNumber",
    type: "text",
    name: "phoneNumber",
    placeholder: "Enter your phone number...",
    leftIcon: <HiMiniPhone />,
  },
] as const;

export default function EditProfileForm() {
  const user = useAppSelector(selectCurrentUser);
  const methods = useForm<EditProfileForm>({
    defaultValues: {
      username: user?.username,
      email: user?.email,
      birthDate: user?.birthDate.split("T")[0],
      phoneNumber: user?.phoneNumber,
    },
    resolver: zodResolver(editProfileFormSchema),
  });
  const { editUserDetails, isLoading } = useEditUser();

  // console.log(user?.birthDate);

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<EditProfileForm> = (data) => {
    // console.log(data.birthDate.split("T"));
    // console.log(data.birthDate);
    const birthDate = data.birthDate.split("T")[0];
    editUserDetails({ ...data, birthDate });
  };
  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Title variant="small">Edit profile</Title>
        <StyledFormFieldsWrapper>
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
        </StyledFormFieldsWrapper>
        <Button disabled={isLoading}>Save</Button>
      </StyledForm>
    </FormProvider>
  );
}

const StyledForm = styled.form`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 0.15rem solid ${({ theme }) => theme.colors.accent};
  padding: ${({ theme }) => theme.spacing.md};
  width: ${({ theme }) => theme.width.xs};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;
