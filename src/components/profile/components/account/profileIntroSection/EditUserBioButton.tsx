import { useRef, useState } from "react";
import styled from "styled-components";

import Button from "../../../../Button";
import EditUserBioForm from "./EditUserBioForm";
import { HiMiniPencil } from "react-icons/hi2";

import { useClickOutside } from "../../../../../hooks/useClickOutside";

export default function EditUserBioButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, () => setIsOpen(false));

  return (
    <StyledEditProfileButtonWrapper ref={containerRef}>
      <StyledEditUserBioButton
        variant="empty"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <HiMiniPencil />
      </StyledEditUserBioButton>

      {isOpen && <EditUserBioForm />}
    </StyledEditProfileButtonWrapper>
  );
}

const StyledEditUserBioButton = styled(Button)``;

const StyledEditProfileButtonWrapper = styled.div`
  position: relative;
`;
