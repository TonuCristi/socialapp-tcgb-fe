import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useInfiniteQuery } from "@tanstack/react-query";

import PostCommentCard from "./PostCommentCard";
import PostCommentCardSkeleton from "./PostCommentCardSkeleton";

import { PostsApi } from "../../../services/PostsApi";

const LIMIT = 5;

type Props = {
  postId: string;
};

export default function PostComments({ postId }: Props) {
  const targetRef = useRef<HTMLLIElement>(null);
  const { fetchNextPage, isLoading, isFetchingNextPage, data } =
    useInfiniteQuery({
      queryKey: ["comments", postId],
      queryFn: ({ pageParam }) =>
        PostsApi.getPostComments(postId, pageParam, LIMIT),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage.nextPage,
    });

  const pages = data?.pages;

  const comments = [...(pages ? pages.flatMap((page) => page.comments) : [])];

  useEffect(() => {
    if (!targetRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries[0].isIntersecting;

        if (isIntersecting && !isFetchingNextPage && !isLoading) {
          fetchNextPage();
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    const target = targetRef.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      observer.unobserve(target);
    };
  }, [fetchNextPage, isFetchingNextPage, isLoading]);

  return (
    <StyledPostComments>
      {comments.map((comment) => (
        <PostCommentCard key={comment.id} comment={comment} />
      ))}
      <li ref={targetRef}></li>
      {(isLoading || isFetchingNextPage) && <PostCommentCardSkeleton />}
    </StyledPostComments>
  );
}

const StyledPostComments = styled.ul`
  height: ${({ theme }) => theme.height.full};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding-right: ${({ theme }) => theme.spacing.sm};
`;
