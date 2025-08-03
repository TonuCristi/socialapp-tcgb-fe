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

export type PhotoOrderWithLinkResponse = {
  _id: string;
  index: number;
  photo: string;
};

export type PostResponse = {
  _id: string;
  content: string;
  photos: PhotoOrderWithLinkResponse[];
  likesCount: number;
  commentsCount: number;
  creatorName: string;
  createdAt: string;
};

export type PhotoOrderWithLink = { id: string; index: number; photo: string };

export type Post = {
  id: string;
  content: string;
  photos: PhotoOrderWithLink[];
  likesCount: number;
  commentsCount: number;
  creatorName: string;
  createdAt: string;
};
