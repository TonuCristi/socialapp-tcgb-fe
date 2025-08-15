import { useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../app/hooks";
import { selectCurrentUser } from "../../features/user/currentUserSelectors";

import Overlay from "../common/Overlay";
import CloseOverlayModalButton from "../common/CloseOverlayModalButton";
import CreatePostForm from "./CreatePostForm";
import Button from "../common/Button";

export default function CreatePostButton() {
  const user = useAppSelector(selectCurrentUser);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <StyledCreatePostButton onClick={() => setIsOpen(true)}>
        What's on your mind, {user?.username}?
      </StyledCreatePostButton>
      {isOpen && (
        <Overlay>
          <CloseOverlayModalButton onClose={() => setIsOpen(false)} />
          <CreatePostForm />
        </Overlay>
      )}
    </>
  );
}

const StyledCreatePostButton = styled(Button)`
  height: 2.5rem;
  text-align: left;
  width: ${({ theme }) => theme.width.full};

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    height: auto;
  }
`;
