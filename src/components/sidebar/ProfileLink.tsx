import styled from "styled-components";

import { StyledSidebarItemText, StyledSidebarLink } from "./styles";

export default function ProfileLink() {
  return (
    <StyledSidebarLink to="/profile">
      <StyledAvatar src="src/assets/photo.png" />
      <StyledSidebarItemText>Profile</StyledSidebarItemText>
    </StyledSidebarLink>
  );
}

const StyledAvatar = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
`;
