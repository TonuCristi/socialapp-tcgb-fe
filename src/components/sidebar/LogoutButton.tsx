import { useState } from "react";
import styled from "styled-components";
import { useLogout } from "../authentication/hooks/useLogout";

import ConfirmationModal from "../common/ConfirmationModal";
import Button from "../common/Button";
import Icon from "../common/Icon";
import { sidebarButtonLinkStyles, StyledSidebarItemText } from "./styles";

export default function LogoutButton() {
  const { logoutUser } = useLogout();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <StyledLogoutButton variant="empty" onClick={() => setIsOpen(true)}>
        <Icon type="exit" />
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
