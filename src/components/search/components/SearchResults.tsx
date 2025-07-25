import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import { useInfiniteQuery } from "@tanstack/react-query";

import Loader from "../../Loader";

import { LIMIT } from "../../../pages/SearchPage";
import { UsersApi } from "../../../services/UsersApi";
import { mapUserPreview } from "../../../utils/mapUserPreview";
import SearchResultCard from "./SearchResultCard";

export default function SearchResults() {
  const rootRef = useRef<HTMLUListElement>(null);
  const targetRef = useRef<HTMLLIElement>(null);

  const { watch } = useFormContext();

  const search = watch("search");

  async function getUsers(search: string, offset: number) {
    const data = await UsersApi.getUsers(search, offset, LIMIT);

    const users = data.users.map((userPreview) => mapUserPreview(userPreview));

    return { users, nextPage: data.nextPage };
  }

  const { fetchNextPage, isFetchingNextPage, data } = useInfiniteQuery({
    queryKey: ["search", search],
    queryFn: ({ pageParam }) => getUsers(search, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  useEffect(() => {
    if (!rootRef.current || !targetRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries[0].isIntersecting;

        if (isIntersecting) {
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
  }, [fetchNextPage]);

  return (
    <StyledSearchResults ref={rootRef}>
      {data?.pages.map((page) =>
        page.users.map((user) => <SearchResultCard key={user.id} user={user} />)
      )}
      <li ref={targetRef}></li>
      {isFetchingNextPage && (
        <StyledLoaderWrapper>
          <Loader />
        </StyledLoaderWrapper>
      )}
    </StyledSearchResults>
  );
}

const StyledSearchResults = styled.ul`
  width: ${({ theme }) => theme.width.full};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const StyledLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
