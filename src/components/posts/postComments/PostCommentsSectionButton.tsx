import type { Dispatch, SetStateAction } from "react";

import { HiMiniChatBubbleOvalLeft } from "react-icons/hi2";
import { StyledInteractionButton } from "../styles";

type Props = {
  setIsCommentsSectionOpen: Dispatch<SetStateAction<boolean>>;
};

export default function PostCommentsSectionButton({
  setIsCommentsSectionOpen,
}: Props) {
  return (
    <StyledInteractionButton
      variant="empty"
      onClick={() => setIsCommentsSectionOpen((prev) => !prev)}
    >
      <HiMiniChatBubbleOvalLeft />
      Comment
    </StyledInteractionButton>
  );
}
