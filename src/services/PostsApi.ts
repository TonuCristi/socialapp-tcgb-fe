import { api } from "../api/api";
import type { PostResponse } from "../types/Post.type";

const URL = "/posts";

export const PostsApi = {
  async createPost(
    newPost: FormData
  ): Promise<{ newPost: PostResponse; message: string }> {
    const res = await api.post<{ newPost: PostResponse; message: string }>(
      `${URL}/create-post`,
      newPost,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return res.data;
  },
};
