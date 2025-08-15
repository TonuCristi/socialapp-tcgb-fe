import { useRef, useState } from "react";
import styled from "styled-components";
import { useClickOutside } from "../../../../../hooks/useClickOutside";

import EditProfileForm from "./EditProfileForm";
import Button from "../../../../common/Button";

export default function EditProfileButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, () => setIsOpen(false));

  return (
    <StyledEditProfileButtonWrapper ref={containerRef}>
      <StyledEditProfileButton onClick={() => setIsOpen((prev) => !prev)}>
        Edit
      </StyledEditProfileButton>

      {isOpen && <EditProfileForm />}
    </StyledEditProfileButtonWrapper>
  );
}

const StyledEditProfileButtonWrapper = styled.div`
  position: relative;

  @media (width < ${({ theme }) => theme.breakpoints["2xs"]}) {
    width: ${({ theme }) => theme.width.full};
  }
`;

const StyledEditProfileButton = styled(Button)`
  width: auto;

  @media (width < ${({ theme }) => theme.breakpoints["2xs"]}) {
    width: ${({ theme }) => theme.width.full};
  }
`;
