import styled from "styled-components";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Page from "../components/common/Page";
import Title from "../components/common/Title";
import SearchForm from "../components/search/components/SearchForm";
import SearchResults from "../components/search/components/SearchResults";
import { StyledDivider } from "../components/profile/components/styles";

import { searchFormSchema } from "../schemas/searchForm.schema";

export const LIMIT = 15;

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

  const { watch } = methods;

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
`;
