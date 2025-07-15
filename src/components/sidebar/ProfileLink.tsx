import styled from "styled-components";

import { StyledSidebarItemText, StyledSidebarLink } from "./styles";

export default function ProfileLink() {
  return (
    <StyledProfileLink to="/profile">
      <StyledAvatar src="src/assets/photo.png" />
      <StyledSidebarItemText>Profile</StyledSidebarItemText>
    </StyledProfileLink>
  );
}

const StyledProfileLink = styled(StyledSidebarLink)`
  margin-top: auto;

  @media (width < ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 0;
  }
`;

const StyledAvatar = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
`;
