import styled from "styled-components";

import Button from "../Button";
import {
  HiMiniBell,
  HiMiniChatBubbleOvalLeft,
  HiMiniMagnifyingGlass,
} from "react-icons/hi2";

export default function Navbar() {
  return (
    <nav>
      <StyledNavbarList>
        <li>
          <StyledButton variant="empty">
            <HiMiniChatBubbleOvalLeft />
          </StyledButton>
        </li>
        <li>
          <StyledButton variant="empty">
            <HiMiniMagnifyingGlass />
          </StyledButton>
        </li>
        <li>
          <StyledButton variant="empty">
            <HiMiniBell />
          </StyledButton>
        </li>
      </StyledNavbarList>
    </nav>
  );
}

const StyledNavbarList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: all 0.1s;

  &:hover {
    background-color: rgb(0, 166, 244, 0.4);
    box-shadow: 0 0 0.4rem 0.4rem rgb(0, 166, 244, 0.4);
  }
`;
