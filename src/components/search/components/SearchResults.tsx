import styled from "styled-components";

import SearchResultCard from "./SearchResultCard";
import { useAppSelector } from "../../../app/hooks";
import { selectUsers } from "../../../features/users/usersSelectors";

export default function SearchResults() {
  const users = useAppSelector(selectUsers);

  return (
    <StyledSearchResults>
      {users.map((user) => (
        <SearchResultCard key={user.id} user={user} />
      ))}
    </StyledSearchResults>
  );
}

const StyledSearchResults = styled.ul`
  width: ${({ theme }) => theme.width.full};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;
