import { useState } from "react";

import PostLikes from "./PostLikes";
import Button from "../../common/Button";
import Overlay from "../../common/Overlay";
import CloseOverlayModalButton from "../../common/CloseOverlayModalButton";

type Props = {
  postId: string;
  likesCount: number;
};

export default function PostLikeStatButton({ postId, likesCount }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button variant="empty" onClick={() => setIsOpen(true)}>
        Likes {likesCount}
      </Button>
      {isOpen && (
        <Overlay>
          <CloseOverlayModalButton onClose={() => setIsOpen(false)} />
          <PostLikes postId={postId} />
        </Overlay>
      )}
    </>
  );
}
