import styled from "styled-components";

import ProfileLink from "./ProfileLink";
import LogoutButton from "./LogoutButton";
import {
  HiMiniBell,
  HiMiniChatBubbleOvalLeft,
  HiMiniHome,
  HiMiniMagnifyingGlass,
} from "react-icons/hi2";
import { StyledSidebarButtonLink, StyledSidebarItemText } from "./styles";
import { Link } from "react-router";
import Button, { type Variant } from "../Button";

export default function Navbar() {
  const navItems = [
    { type: "link", as: Link, to: "/", icon: <HiMiniHome />, text: "Home" },
    {
      type: "button",
      as: Button,
      icon: <HiMiniMagnifyingGlass />,
      text: "Search",
    },
    {
      type: "link",
      as: Link,
      to: "/chat",
      icon: <HiMiniChatBubbleOvalLeft />,
      text: "Chat",
    },
    {
      type: "button",
      as: Button,
      icon: <HiMiniBell />,
      text: "Notifications",
    },
  ];

  return (
    <StyledNavbar>
      <StyledNavbarList>
        {navItems.map(({ type, as, to, icon, text }) => (
          <StyledNavbarListItem key={text}>
            <StyledSidebarButtonLink
              as={as}
              to={type === "link" ? to : ""}
              variant={(type === "button" ? "empty" : "") as Variant}
            >
              {icon}
              <StyledSidebarItemText>{text}</StyledSidebarItemText>
            </StyledSidebarButtonLink>
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
  height: 100%;
`;

const StyledNavbarList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  height: 100%;

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
