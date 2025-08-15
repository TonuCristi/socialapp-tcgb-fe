import styled from "styled-components";

import ProfileLink from "./ProfileLink";
import LogoutButton from "./LogoutButton";
import Icon from "../common/Icon";
import { StyledSidebarItemText, StyledSidebarLink } from "./styles";

export default function Navbar() {
  const navItems = [
    { text: "Home", to: "/", icon: <Icon type="home" /> },
    {
      text: "Search",
      to: "/search",
      icon: <Icon type="search" />,
    },
    {
      text: "Chat",
      to: "/chat",
      icon: <Icon type="chat" />,
    },
    {
      text: "Notifications",
      to: "/notifications",
      icon: <Icon type="bell" />,
    },
  ];

  return (
    <StyledNavbar>
      <StyledNavbarList>
        {navItems.map(({ to, icon, text }) => (
          <StyledNavbarListItem key={text}>
            <StyledSidebarLink
              to={to}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {icon}
              <StyledSidebarItemText>{text}</StyledSidebarItemText>
            </StyledSidebarLink>
          </StyledNavbarListItem>
        ))}
        <StyledNavbarListItemWithMargin>
          <ProfileLink />
        </StyledNavbarListItemWithMargin>
        <StyledNavbarListItem>
          <LogoutButton />
        </StyledNavbarListItem>
      </StyledNavbarList>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  width: ${({ theme }) => theme.width.full};
  height: ${({ theme }) => theme.height.full};
`;

const StyledNavbarList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  height: ${({ theme }) => theme.height.full};

  @media (width < ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: ${({ theme }) => theme.width.full};
  }

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    gap: ${({ theme }) => theme.spacing.xs};
  }

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    gap: ${({ theme }) => theme.spacing["2xs"]};
  }
`;

const StyledNavbarListItem = styled.li`
  width: ${({ theme }) => theme.width.full};
`;

const StyledNavbarListItemWithMargin = styled(StyledNavbarListItem)`
  margin-top: auto;
`;
