import { Link } from "react-router";
import styled from "styled-components";

import type { UserPreview } from "../../../types/User.type";

type Props = {
  user: UserPreview;
};

export default function SearchResultCard({ user }: Props) {
  return (
    <StyledListItem>
      <StyledResultLink to="/">
        <StyledAvatar src="src/assets/photo.png" />
        {user.username}
      </StyledResultLink>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  width: ${({ theme }) => theme.width.full};
`;

const StyledResultLink = styled(Link)`
  border: 0.15rem solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius["3xl"]};
  display: inline-block;
  width: ${({ theme }) => theme.width.full};
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const StyledAvatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
`;
