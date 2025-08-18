import type z from "zod";
import type { createPostFormSchema } from "../schemas/createPostForm.schema";
import type { addPostCommentFormSchema } from "../schemas/addPostCommentForm.schema";

export type PhotoOrder = { index: number; photo: File };

export type CreatePostForm = z.infer<typeof createPostFormSchema>;

export type AddPostCommentForm = z.infer<typeof addPostCommentFormSchema>;

export type PostCommentResponse = {
  _id: string;
  content: string;
  likesCount: number;
  createdAt: string;
  userAvatar: string;
  userUsername: string;
  postId: string;
  userId: string;
};

export type PostComment = {
  id: string;
  content: string;
  likesCount: number;
  createdAt: string;
  userAvatar: string;
  userUsername: string;
  postId: string;
  userId: string;
};

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
  isLikedByMe: boolean;
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
  isLikedByMe: boolean;
  createdAt: string;
};
