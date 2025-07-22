import styled from "styled-components";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Page from "../components/Page";
import Title from "../components/Title";
import SearchForm from "../components/search/components/SearchForm";
import SearchResults from "../components/search/components/SearchResults";
import { StyledDivider } from "../components/profile/components/styles";

import { searchFormSchema } from "../schemas/searchForm.schema";
import { useFetchUsers } from "../components/search/hooks/useFetchUsers";
import { useEffect } from "react";

type Search = {
  search: string;
};

export default function SearchPage() {
  const methods = useForm<Search>({
    defaultValues: {
      search: "",
    },
    resolver: zodResolver(searchFormSchema),
  });
  const { getSearchedUsers, offset, setOffset } = useFetchUsers();

  const { watch, subscribe } = methods;

  useEffect(() => {
    const callback = subscribe({
      formState: {
        values: true,
      },
      callback: ({ values }) => {
        const search = values.search;
        getSearchedUsers(search);
      },
    });

    return () => callback();
  }, [subscribe, getSearchedUsers]);

  return (
    <FormProvider {...methods}>
      <StyledSearchPage>
        <Title variant="large">Search</Title>
        <StyledDivider />
        <SearchForm />
        {watch("search").length > 0 ? (
          <SearchResults />
        ) : (
          <p>Type to search.</p>
        )}
      </StyledSearchPage>
    </FormProvider>
  );
}

const StyledSearchPage = styled(Page)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  height: min-content;
`;
