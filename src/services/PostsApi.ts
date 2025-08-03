import { api } from "../api/api";
import type { Post, PostResponse } from "../types/Post.type";
import { mapPost } from "../utils/mapPost";

const URL = "/posts";

export const PostsApi = {
  async createPost(
    newPost: FormData
  ): Promise<{ newPost: Post; message: string }> {
    const res = await api.post<{ newPost: PostResponse; message: string }>(
      `${URL}/create-post`,
      newPost,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const post = mapPost(res.data.newPost);

    return { newPost: post, message: res.data.message };
  },
  async getUserPosts(
    offset: number,
    limit: number
  ): Promise<{ posts: Post[]; nextPage: number }> {
    const res = await api.get<{ posts: PostResponse[]; nextPage: number }>(
      `${URL}/get-user-posts?offset=${offset}&limit=${limit}`
    );

    const posts = res.data.posts.map((post) => mapPost(post));

    return { posts, nextPage: res.data.nextPage };
  },
};
