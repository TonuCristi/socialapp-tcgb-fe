import { useState } from "react";
import styled from "styled-components";

import { HiMiniHeart } from "react-icons/hi2";

import { useMutation } from "@tanstack/react-query";
import { PostsApi } from "../../../services/PostsApi";
import { StyledInteractionButton } from "./styles";
import { queryClient } from "../../../App";
import type { Post } from "../../../types/Post.type";

type Props = {
  postId: string;
  isLikedByMe: boolean;
};

export default function PostLikeButton({ postId, isLikedByMe }: Props) {
  const [isLiked, setIsLiked] = useState<boolean>(isLikedByMe);
  const { isPending, mutate } = useMutation({
    mutationFn: (postId: string) => PostsApi.like(postId, "post"),
    onSuccess: () => {
      setIsLiked((prev) => !prev);
      queryClient.setQueryData(
        ["user-posts"],
        (oldPosts: {
          pages: { posts: Post[]; nextPage: number }[];
          pageParams: number[];
        }) => {
          return {
            ...oldPosts,
            pages: oldPosts.pages.map((page) => ({
              ...page,
              posts: page.posts.map((post) =>
                post.id === postId
                  ? {
                      ...post,
                      likesCount: isLiked
                        ? post.likesCount - 1
                        : post.likesCount + 1,
                    }
                  : post
              ),
            })),
          };
        }
      );
    },
  });

  return (
    <StyledPostLikeButton
      variant="empty"
      $isLiked={isLiked}
      disabled={isPending}
      onClick={() => mutate(postId)}
    >
      <HiMiniHeart />
      Like
    </StyledPostLikeButton>
  );
}

export const StyledPostLikeButton = styled(StyledInteractionButton)<{
  $isLiked: boolean;
}>`
  :first-child {
    color: ${({ theme, $isLiked }) =>
      $isLiked ? theme.colors.accent : theme.colors.white};
  }
`;
