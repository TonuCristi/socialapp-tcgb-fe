import type { Dispatch, SetStateAction } from "react";

import Icon from "../../common/Icon";
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
      <Icon type="chat" />
      Comment
    </StyledInteractionButton>
  );
}
