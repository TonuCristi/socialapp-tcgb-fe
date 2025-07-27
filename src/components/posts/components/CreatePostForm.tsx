import styled from "styled-components";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Title from "../../Title";
import Textarea from "../../Textarea";
import Label from "../../input/Label";
import Button from "../../Button";
import Message from "../../Message";
import { HiMiniPhoto } from "react-icons/hi2";
import { StyledFormField } from "../../input/styles";

import { useAppSelector } from "../../../app/hooks";
import { selectCurrentUser } from "../../../features/user/currentUserSelectors";
import type { CreatePostForm } from "../../../types/Post.type";
import { createPostFormSchema } from "../../../schemas/createPostForm.schema";

export default function CreatePostForm() {
  const methods = useForm<CreatePostForm>({
    defaultValues: {
      content: "",
      photos: [],
    },
    resolver: zodResolver(createPostFormSchema),
  });
  const user = useAppSelector(selectCurrentUser);

  const {
    handleSubmit,
    formState: { errors },
    watch,
    register,
  } = methods;

  const onSumbit: SubmitHandler<CreatePostForm> = (data) => {
    console.log(data);
  };

  const photos = Array.from(watch("photos"));

  return (
    <FormProvider {...methods}>
      <StyledFormWrapper>
        <Title variant="large">Create post</Title>
        <StyledForm onSubmit={handleSubmit(onSumbit)}>
          <StyledFormField>
            <Textarea
              name="content"
              rows={4}
              placeholder={`What's on your mind, ${user?.username}?`}
            />
            {errors.content && (
              <Message variant="error">{errors.content.message}</Message>
            )}
          </StyledFormField>
          <StyledFormField>
            <StyledPhotosLabel htmlFor="photos">
              {photos.length >= 1
                ? `Selected photos: ${photos.length}`
                : "Select photos"}
              <HiMiniPhoto />
            </StyledPhotosLabel>
            <input
              {...register("photos")}
              id="photos"
              type="file"
              name="photos"
              accept="image/png, image/jpeg"
              multiple
              style={{ display: "none" }}
            />
            {errors.photos && (
              <Message variant="error">{errors.photos.message}</Message>
            )}
          </StyledFormField>
          <Button>Create post</Button>
        </StyledForm>
        <StyledPhotosWrapper>
          {photos.length > 0 &&
            photos.map((photo, i) => (
              <img key={i} src={URL.createObjectURL(photo)} />
            ))}
        </StyledPhotosWrapper>
      </StyledFormWrapper>
    </FormProvider>
  );
}

const StyledFormWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 0.15rem solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.md};
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const StyledPhotosLabel = styled(Label)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.15rem solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
`;

const StyledPhotosWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.sm};
`;
