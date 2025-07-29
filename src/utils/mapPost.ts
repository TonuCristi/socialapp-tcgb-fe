import type { PostResponse } from "../types/Post.type";

export function mapPost(post: PostResponse) {
  const { _id: id, ...rest } = post;

  const photos = post.photos.map((photoItem) => {
    const { _id: id, ...rest } = photoItem;

    return { id, ...rest };
  });

  return {
    id,
    ...rest,
    photos,
  };
}
