import styled from "styled-components";

import {
  HiMiniBell,
  HiMiniChatBubbleOvalLeft,
  HiMiniHome,
  HiMiniMagnifyingGlass,
} from "react-icons/hi2";
import {
  StyledSidebarButton,
  StyledSidebarItemText,
  StyledSidebarLink,
} from "./styles";

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledNavbarList>
        <StyledNavbarListItem>
          <StyledSidebarLink to="/">
            <HiMiniHome />
            <StyledSidebarItemText>Home</StyledSidebarItemText>
          </StyledSidebarLink>
        </StyledNavbarListItem>
        <StyledNavbarListItem>
          <StyledSidebarButton variant="empty">
            <HiMiniMagnifyingGlass />
            <StyledSidebarItemText>Search</StyledSidebarItemText>
          </StyledSidebarButton>
        </StyledNavbarListItem>
        <StyledNavbarListItem>
          <StyledSidebarLink to="/chat">
            <HiMiniChatBubbleOvalLeft />
            <StyledSidebarItemText>Chat</StyledSidebarItemText>
          </StyledSidebarLink>
        </StyledNavbarListItem>
        <StyledNavbarListItem>
          <StyledSidebarButton variant="empty">
            <HiMiniBell />
            <StyledSidebarItemText>Notifications</StyledSidebarItemText>
          </StyledSidebarButton>
        </StyledNavbarListItem>
      </StyledNavbarList>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  width: 100%;

  @media (width < ${({ theme }) => theme.breakpoints.sm}) {
    width: auto;
  }
`;

const StyledNavbarList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (width < ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
    align-items: center;
  }
`;

const StyledNavbarListItem = styled.li`
  width: 100%;
`;
