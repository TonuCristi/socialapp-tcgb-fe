import { HiMiniArrowLeftEndOnRectangle } from "react-icons/hi2";
import { StyledSidebarButton, StyledSidebarItemText } from "./styles";

export default function LogoutButton() {
  return (
    <StyledSidebarButton variant="empty">
      <HiMiniArrowLeftEndOnRectangle />
      <StyledSidebarItemText>Log out</StyledSidebarItemText>
    </StyledSidebarButton>
  );
}
