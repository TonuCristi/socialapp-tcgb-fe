import { useEffect, useRef, type Dispatch, type SetStateAction } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

import Input from "../../input/Input";

import type { UserPreview } from "../../../types/User.type";
import { LIMIT } from "../../../pages/SearchPage";

type Props = {
  getSearchedUsers: (
    search: string,
    offset: number,
    limit: number,
    abortController: AbortController
  ) => void;
  setUsers: Dispatch<SetStateAction<UserPreview[]>>;
};

export default function SearchForm({ getSearchedUsers, setUsers }: Props) {
  const { getValues, subscribe, setFocus } = useFormContext();
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    setFocus("search");
  }, [setFocus]);

  useEffect(() => {
    const callback = subscribe({
      formState: {
        values: true,
      },
      callback: ({ values }) => {
        if (abortControllerRef.current) {
          abortControllerRef.current.abort();
        }

        abortControllerRef.current = new AbortController();

        const search = values.search;

        if (abortControllerRef.current) {
          getSearchedUsers(search, 0, LIMIT, abortControllerRef.current);
        }
      },
    });

    return () => callback();
  }, [subscribe, getSearchedUsers, getValues, setUsers]);

  return (
    <StyledForm>
      <Input name="search" placeholder="Search your new friends here..." />
    </StyledForm>
  );
}

const StyledForm = styled.form``;
