import { api } from "../api/api";
import type { Post, PostResponse } from "../types/Post.type";
import type { UserPreview, UserPreviewResponse } from "../types/User.type";
import { mapPost } from "../utils/mapPost";
import { mapUserPreview } from "../utils/mapUserPreview";

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

    const posts = res.data.posts.map(mapPost);

    return { posts, nextPage: res.data.nextPage };
  },
  async like(postId: string, type: "post" | "comment") {
    const likeTypes = {
      post: await api.post(`${URL}/like-post/${postId}`),
      comment: await api.post(`${URL}/like-post/${postId}`),
    };

    return likeTypes[type];
  },
  async getPostLikes(
    postId: string,
    offset: number,
    limit: number
  ): Promise<{ likes: UserPreview[]; nextPage: number }> {
    const res = await api.get<{
      likes: UserPreviewResponse[];
      nextPage: number;
    }>(`${URL}/get-post-likes/${postId}?offset=${offset}&limit=${limit}`);

    const likes = res.data.likes.map(mapUserPreview);

    return { likes, nextPage: res.data.nextPage };
  },
};
