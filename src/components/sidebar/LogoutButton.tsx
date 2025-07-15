import { useState } from "react";

import ConfirmationModal from "../ConfirmationModal";
import { HiMiniArrowLeftEndOnRectangle } from "react-icons/hi2";
import { StyledSidebarButton, StyledSidebarItemText } from "./styles";

import { useLogout } from "../authentication/hooks/useLogout";

export default function LogoutButton() {
  const { logoutUser } = useLogout();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <StyledSidebarButton variant="empty" onClick={() => setIsOpen(true)}>
        <HiMiniArrowLeftEndOnRectangle />
        <StyledSidebarItemText>Log out</StyledSidebarItemText>
      </StyledSidebarButton>
      {isOpen && (
        <ConfirmationModal
          onAprove={logoutUser}
          onReject={() => setIsOpen(false)}
        >
          Are you sure you want to log out?
        </ConfirmationModal>
      )}
    </>
  );
}
