import { useRef, useState } from "react";
import styled from "styled-components";

import EditUserBioForm from "./EditUserBioForm";
import Button from "../../../../common/Button";
import { HiMiniPencil } from "react-icons/hi2";

import { useClickOutside } from "../../../../../hooks/useClickOutside";

export default function EditUserBioButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, () => setIsOpen(false));

  return (
    <StyledEditProfileButtonWrapper ref={containerRef}>
      <Button variant="empty" onClick={() => setIsOpen((prev) => !prev)}>
        <HiMiniPencil />
      </Button>

      {isOpen && <EditUserBioForm />}
    </StyledEditProfileButtonWrapper>
  );
}

const StyledEditProfileButtonWrapper = styled.div`
  position: relative;
`;
