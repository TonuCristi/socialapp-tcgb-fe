import type z from "zod";
import type { createPostFormSchema } from "../schemas/createPostForm.schema";

export type PhotoOrder = { index: number; photo: File };

export type CreatePostForm = z.infer<typeof createPostFormSchema>;

export type CreatePostFormWithPhotoOrder = Omit<
  z.infer<typeof createPostFormSchema>,
  "photos"
> & {
  photos: PhotoOrder[];
};

export type PostResponse = {
  _id: string;
  content: string;
  photos: PhotoOrder[];
};

export type Post = {
  _id: string;
  content: string;
  photos: PhotoOrder[];
};
