import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import styled from "styled-components";

import Title from "../../../../Title";
import Label from "../../../../input/Label";
import Message from "../../../../Message";
import Button from "../../../../Button";
import Textarea from "../../../../Textarea";
import { StyledFormField } from "../../../../input/styles";

import { useAppSelector } from "../../../../../app/hooks";
import type { EditUserBioForm } from "../../../../../types/User.type";
import { editUserBioFormSchema } from "../../../../../schemas/editUserBioForm.schema";
import { useEditUserBio } from "../../../hooks/useEditUserBio";
import { selectCurrentUser } from "../../../../../features/user/currentUserSelectors";

export default function EditUserBioForm() {
  const user = useAppSelector(selectCurrentUser);
  const methods = useForm<EditUserBioForm>({
    defaultValues: {
      bio: user?.bio,
    },
    resolver: zodResolver(editUserBioFormSchema),
  });
  const { editUserBio, isLoading } = useEditUserBio();

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<EditUserBioForm> = (data) =>
    editUserBio(data.bio);

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Title variant="small">Edit bio</Title>
        <StyledFormField>
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            name="bio"
            placeholder="Enter your bio..."
            rows={4}
          />
          {errors.bio && (
            <Message variant="error">{errors.bio.message}</Message>
          )}
        </StyledFormField>
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

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    width: ${({ theme }) => theme.width["3xs"]};
  }

  @media (width < ${({ theme }) => theme.breakpoints["2xs"]}) {
    width: 12rem;
  }
`;
