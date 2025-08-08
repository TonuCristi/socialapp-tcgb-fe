import { useState } from "react";
import styled from "styled-components";

import CreatePostForm from "./CreatePostForm";
import Overlay from "../../common/Overlay";
import Button from "../../common/Button";
import CloseOverlayModalButton from "../../common/CloseOverlayModalButton";

import { useAppSelector } from "../../../app/hooks";
import { selectCurrentUser } from "../../../features/user/currentUserSelectors";

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
