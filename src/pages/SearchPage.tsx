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

export const LIMIT = 10;

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
  const { getSearchedUsers, users, usersCount, isLoading, setUsers } =
    useFetchUsers();

  const { watch } = methods;

  // console.log(isLoading);

  return (
    <FormProvider {...methods}>
      <StyledSearchPage>
        <Title variant="large">Search</Title>
        <StyledDivider />
        <SearchForm getSearchedUsers={getSearchedUsers} setUsers={setUsers} />
        {watch("search").length > 0 ? (
          <SearchResults
            getSearchedUsers={getSearchedUsers}
            users={users}
            usersCount={usersCount}
            isLoading={isLoading}
          />
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
