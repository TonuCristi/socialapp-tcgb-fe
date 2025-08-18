import styled from "styled-components";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

import Button from "../../common/Button";
import Input from "../../common/input/Input";

import type { AddPostCommentForm, PostComment } from "../../../types/Post.type";
import { addPostCommentFormSchema } from "../../../schemas/addPostCommentForm.schema";
import { PostsApi } from "../../../services/PostsApi";
import { queryClient } from "../../../App";

type Props = {
  postId: string;
};

export default function AddPostCommentForm({ postId }: Props) {
  const methods = useForm<AddPostCommentForm>({
    defaultValues: {
      content: "",
    },
    resolver: zodResolver(addPostCommentFormSchema),
  });

  const { isPending, mutate } = useMutation({
    mutationFn: PostsApi.addPostComment,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.setQueryData(
        ["comments", postId],
        (oldComments: {
          pageParams: number[];
          pages: { comments: PostComment[]; nextPage: number };
        }) => {
          console.log(oldComments);
        }
      );
    },
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message);
      }
    },
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<AddPostCommentForm> = (data) => {
    if (!data.content) return;

    mutate({ postId, newPostComment: data });
  };

  return (
    <FormProvider {...methods}>
      <StyledAddCommentForm onSubmit={handleSubmit(onSubmit)}>
        <Input name="content" placeholder="Write your comment..." />
        <StyledAddCommentButton disabled={isPending}>
          Add
        </StyledAddCommentButton>
      </StyledAddCommentForm>
    </FormProvider>
  );
}

const StyledAddCommentForm = styled.form`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (width < ${({ theme }) => theme.breakpoints["2xs"]}) {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
`;

const StyledAddCommentButton = styled(Button)`
  width: auto;
`;
