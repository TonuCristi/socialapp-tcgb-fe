import { useEffect, useRef } from "react";
import styled from "styled-components";

import SearchResultCard from "./SearchResultCard";
import Loader from "../../Loader";

import type { UserPreview } from "../../../types/User.type";
import { useFormContext } from "react-hook-form";
import { LIMIT } from "../../../pages/SearchPage";

type Props = {
  getSearchedUsers: (
    search: string,
    offset: number,
    limit: number,
    abortController: AbortController
  ) => void;
  users: UserPreview[];
  usersCount: number;
  isLoading: boolean;
};

export default function SearchResults({
  getSearchedUsers,
  users,
  isLoading,
}: Props) {
  const rootRef = useRef<HTMLUListElement>(null);
  const targetRef = useRef<HTMLLIElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const offsetRef = useRef<number>(0);
  const isLoadingRef = useRef<boolean>(false);

  const { watch } = useFormContext();

  useEffect(() => {
    isLoadingRef.current = isLoading;
  }, [isLoading]);

  const options = {
    root: rootRef.current,
    threshold: 1.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoadingRef.current) {
        if (abortControllerRef.current) {
          abortControllerRef.current.abort();
        }

        abortControllerRef.current = new AbortController();

        if (offsetRef.current >= 1) {
          getSearchedUsers(
            watch("search"),
            offsetRef.current,
            LIMIT,
            abortControllerRef.current
          );
        }

        offsetRef.current += 1;
      }
    }, options);

    const target = targetRef.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
    };
  }, [watch, getSearchedUsers]);

  return (
    <StyledSearchResults ref={rootRef}>
      {users.map((user) => (
        <SearchResultCard key={user.id} user={user} />
      ))}
      <li ref={targetRef}></li>
      {isLoading && (
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
