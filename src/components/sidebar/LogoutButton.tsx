import { useState } from "react";

import ConfirmationModal from "../ConfirmationModal";
import { HiMiniArrowLeftEndOnRectangle } from "react-icons/hi2";
import { StyledSidebarButtonLink, StyledSidebarItemText } from "./styles";

import { useLogout } from "../authentication/hooks/useLogout";

export default function LogoutButton() {
  const { logoutUser } = useLogout();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <StyledSidebarButtonLink variant="empty" onClick={() => setIsOpen(true)}>
        <HiMiniArrowLeftEndOnRectangle />
        <StyledSidebarItemText>Log out</StyledSidebarItemText>
      </StyledSidebarButtonLink>
      {isOpen && (
        <ConfirmationModal
          onConfirm={logoutUser}
          onReject={() => setIsOpen(false)}
        >
          Are you sure you want to log out?
        </ConfirmationModal>
      )}
    </>
  );
}
