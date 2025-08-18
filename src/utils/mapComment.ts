import type { PostCommentResponse } from "../types/Post.type";

export function mapComment(comment: PostCommentResponse) {
  const { _id: id, ...rest } = comment;

  return { id, ...rest };
}
