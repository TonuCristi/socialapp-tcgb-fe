import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import styled from "styled-components";

import PostLikeCard from "./PostLikeCard";
import Title from "../../common/Title";

import { PostsApi } from "../../../services/PostsApi";

const LIMIT = 10;

type Props = {
  postId: string;
};

export default function PostLikes({ postId }: Props) {
  const targetRef = useRef<HTMLLIElement>(null);

  const { fetchNextPage, isFetchingNextPage, data } = useInfiniteQuery({
    queryKey: ["post-likes", postId],
    queryFn: ({ pageParam }) => PostsApi.getPostLikes(postId, pageParam, LIMIT),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  useEffect(() => {
    if (!targetRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries[0].isIntersecting;

        if (isIntersecting && !isFetchingNextPage) {
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
      observer.disconnect();
    };
  }, [fetchNextPage, isFetchingNextPage]);

  return (
    <StyledPostLikesWrapper>
      <Title variant="medium">Post likes</Title>
      <StyledPostLikes>
        {data?.pages.map((page) =>
          page.likes.map((user) => <PostLikeCard key={user.id} user={user} />)
        )}
        <li ref={targetRef}></li>
      </StyledPostLikes>
    </StyledPostLikesWrapper>
  );
}

const StyledPostLikesWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 0.15rem solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.md};
  width: ${({ theme }) => theme.width.xl};
  height: 50dvh;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (width < ${({ theme }) => theme.breakpoints.lg}) {
    width: 60%;
  }

  @media (width < ${({ theme }) => theme.breakpoints.md}) {
    width: 70%;
  }

  @media (width < ${({ theme }) => theme.breakpoints.sm}) {
    width: 90%;
    padding: ${({ theme }) => theme.spacing.sm};
  }

  @media (width < ${({ theme }) => theme.breakpoints["2xs"]}) {
    width: ${({ theme }) => theme.width.full};
  }
`;

const StyledPostLikes = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  overflow-y: auto;
  padding-right: ${({ theme }) => theme.spacing.sm};
`;
