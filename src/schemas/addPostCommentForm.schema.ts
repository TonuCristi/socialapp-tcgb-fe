import z from "zod";

export const addPostCommentFormSchema = z.object({
  comment: z
    .string()
    .min(1, { message: "Oops! You forgot to write your comment." })
    .max(2000, {
      message: "The comment should't be longer than 2000 characters!",
    }),
});
