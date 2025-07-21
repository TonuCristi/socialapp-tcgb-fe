import styled from "styled-components";

import { StyledSidebarButtonLink, StyledSidebarItemText } from "./styles";
import { Link } from "react-router";

export default function ProfileLink() {
  return (
    <StyledSidebarButtonLink as={Link} to="/profile">
      <StyledAvatar src="src/assets/photo.png" />
      <StyledSidebarItemText>Profile</StyledSidebarItemText>
    </StyledSidebarButtonLink>
  );
}

const StyledAvatar = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
`;
