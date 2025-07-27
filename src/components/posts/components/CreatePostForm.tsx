import { useState } from "react";
import styled from "styled-components";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Title from "../../Title";
import Textarea from "../../Textarea";
import Label from "../../input/Label";
import Button from "../../Button";
import Message from "../../Message";
import CreatePostFormPhotos from "./CreatePostFormPhotos";
import { HiMiniPhoto } from "react-icons/hi2";
import { StyledFormField } from "../../input/styles";

import { useAppSelector } from "../../../app/hooks";
import { selectCurrentUser } from "../../../features/user/currentUserSelectors";
import type { CreatePostForm } from "../../../types/Post.type";
import { createPostFormSchema } from "../../../schemas/createPostForm.schema";

export type PhotoOrder = { index: number; photo: File };

export default function CreatePostForm() {
  const methods = useForm<CreatePostForm>({
    defaultValues: {
      content: "",
      photos: [],
    },
    resolver: zodResolver(createPostFormSchema),
  });
  const user = useAppSelector(selectCurrentUser);
  const [photosOrder, setPhotosOrder] = useState<PhotoOrder[]>([]);

  const {
    handleSubmit,
    formState: { errors },
    watch,
    register,
  } = methods;

  const photos = Array.from(watch("photos"));

  const onSumbit: SubmitHandler<CreatePostForm> = (data) => {
    console.log({
      ...data,
      photos:
        data.photos.length !== photosOrder.length
          ? data.photos.map((photo, i) => ({ index: i + 1, photo }))
          : photosOrder,
    });
  };

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
        {photos.length > 0 && (
          <CreatePostFormPhotos
            photosOrder={photosOrder}
            setPhotosOrder={setPhotosOrder}
          />
        )}
      </StyledFormWrapper>
    </FormProvider>
  );
}

const StyledFormWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 0.15rem solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.md};
  width: ${({ theme }) => theme.width.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (width < ${({ theme }) => theme.breakpoints.lg}) {
    width: 60%;
  }

  @media (width < ${({ theme }) => theme.breakpoints.md}) {
    width: 70%;
  }

  @media (width < ${({ theme }) => theme.breakpoints.sm}) {
    width: 80%;
    padding: ${({ theme }) => theme.spacing.sm};
  }

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    width: 90%;
  }

  @media (width < ${({ theme }) => theme.breakpoints["2xs"]}) {
    width: 100%;
  }
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

  margin-bottom: ${({ theme }) => theme.spacing.md};
`;
