import styled from "styled-components";

import EditUserBioButton from "./EditUserBioButton";

import { useAppSelector } from "../../../../../app/hooks";
import { selectCurrentUser } from "../../../../../features/user/currentUserSelectors";

export default function ProfileBio() {
  const user = useAppSelector(selectCurrentUser);

  return (
    <StyledBio>
      <p>{user?.bio}</p>
      <EditUserBioButton />
    </StyledBio>
  );
}

const StyledBio = styled.div`
  word-break: break-word;

  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
`;
