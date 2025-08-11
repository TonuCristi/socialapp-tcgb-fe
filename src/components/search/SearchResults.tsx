import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import { useInfiniteQuery } from "@tanstack/react-query";

import SearchResultCard from "./SearchResultCard";
import SearchResultCardSkeleton from "./SearchResultCardSkeleton";

import { UsersApi } from "../../services/UsersApi";

export const LIMIT = 15;

export default function SearchResults() {
  const targetRef = useRef<HTMLLIElement>(null);

  const { watch } = useFormContext();

  const search = watch("search");

  const { fetchNextPage, isLoading, isFetchingNextPage, data } =
    useInfiniteQuery({
      queryKey: ["search", search],
      queryFn: ({ pageParam }) => UsersApi.getUsers(search, pageParam, LIMIT),
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
    <StyledSearchResults>
      {data?.pages.map((page) =>
        page.users.map((user) => <SearchResultCard key={user.id} user={user} />)
      )}
      <li ref={targetRef}></li>
      {(isLoading || isFetchingNextPage) && <SearchResultCardSkeleton />}
    </StyledSearchResults>
  );
}

const StyledSearchResults = styled.ul`
  width: ${({ theme }) => theme.width.full};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;
