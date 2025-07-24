import { useState } from "react";
import styled from "styled-components";

import ConfirmationModal from "../ConfirmationModal";
import Button from "../Button";
import { HiMiniArrowLeftEndOnRectangle } from "react-icons/hi2";
import { sidebarButtonLinkStyles, StyledSidebarItemText } from "./styles";

import { useLogout } from "../authentication/hooks/useLogout";

export default function LogoutButton() {
  const { logoutUser } = useLogout();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <StyledLogoutButton variant="empty" onClick={() => setIsOpen(true)}>
        <HiMiniArrowLeftEndOnRectangle />
        <StyledSidebarItemText>Log out</StyledSidebarItemText>
      </StyledLogoutButton>
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

const StyledLogoutButton = styled(Button)`
  ${sidebarButtonLinkStyles}
`;
