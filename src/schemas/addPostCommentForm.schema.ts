import z from "zod";

export const addPostCommentFormSchema = z.object({
  comment: z.string().max(2000, {
    message: "The comment should't be longer than 2000 characters!",
  }),
});
