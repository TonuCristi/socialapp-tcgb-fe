import type z from "zod";
import type { createPostFormSchema } from "../schemas/createPostForm.schema";

export type CreatePostForm = z.infer<typeof createPostFormSchema>;
