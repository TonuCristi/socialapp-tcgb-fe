import { useState } from "react";
import styled from "styled-components";

import Button from "../../Button";
import Overlay from "../../Overlay";
import CreatePostForm from "./CreatePostForm";
import { HiMiniXMark } from "react-icons/hi2";

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
          <StyledCloseModalButton
            variant="empty"
            onClick={() => setIsOpen(false)}
          >
            <HiMiniXMark />
          </StyledCloseModalButton>
          <CreatePostForm />
        </Overlay>
      )}
    </>
  );
}

const StyledCreatePostButton = styled(Button)`
  height: 2.5rem;
  text-align: left;
  width: 100%;

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    height: auto;
  }
`;

const StyledCloseModalButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: ${({ theme }) => theme.spacing.xl};
  margin-right: ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.accent};

  :first-child {
    stroke-width: 1;
  }
`;
