import styled from "styled-components";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";

import Button from "../../common/Button";
import Input from "../../common/input/Input";

import type { AddPostCommentForm } from "../../../types/Post.type";
import { addPostCommentFormSchema } from "../../../schemas/addPostCommentForm.schema";

export default function AddPostCommentForm() {
  const methods = useForm<AddPostCommentForm>({
    defaultValues: {
      comment: "",
    },
    resolver: zodResolver(addPostCommentFormSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<AddPostCommentForm> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <StyledAddCommentForm onSubmit={handleSubmit(onSubmit)}>
        <Input name="comment" placeholder="Write your comment..." />
        <StyledAddCommentButton>Add</StyledAddCommentButton>
      </StyledAddCommentForm>
    </FormProvider>
  );
}

const StyledAddCommentForm = styled.form`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const StyledAddCommentButton = styled(Button)`
  width: auto;
`;
