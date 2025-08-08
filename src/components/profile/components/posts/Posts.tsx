import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import styled from "styled-components";

import Post from "../../../posts/components/Post";
import Loader from "../../../common/Loader";

import { PostsApi } from "../../../../services/PostsApi";

const LIMIT = 5;

export default function Posts() {
  const targetRef = useRef<HTMLLIElement>(null);

  const { fetchNextPage, isLoading, isFetchingNextPage, data } =
    useInfiniteQuery({
      queryKey: ["user-posts"],
      queryFn: ({ pageParam }) => PostsApi.getUserPosts(pageParam, LIMIT),
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
    <>
      <StyledPosts>
        {data?.pages.map((page) =>
          page.posts.map((post) => <Post key={post.id} post={post} />)
        )}
        <li ref={targetRef}></li>
      </StyledPosts>
      {(isLoading || isFetchingNextPage) && (
        <StyledLoaderWrapper>
          <Loader />
        </StyledLoaderWrapper>
      )}
    </>
  );
}

const StyledPosts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const StyledLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
