import { useState } from "react";
import styled from "styled-components";

import Button from "../common/Button";
import PostCommentsSectionButton from "./postComments/PostCommentsSectionButton";
import PostLikeStatButton from "./postLikes/PostLikeStatButton";
import PostLikeButton from "./postLikes/PostLikeButton";
import { HiMiniLink } from "react-icons/hi2";
import { StyledInteractionButton } from "./styles";
import PostCommentsSection from "./postComments/PostCommentsSection";

type Props = {
  postId: string;
  isLikedByMe: boolean;
  likesCount: number;
  commentsCount: number;
};

export default function PostInteractions({
  postId,
  isLikedByMe,
  likesCount,
  commentsCount,
}: Props) {
  const [isCommentsSectionOpen, setIsCommentsSectionOpen] =
    useState<boolean>(false);

  return (
    <StyledPostInteractions>
      <StyledPostStats>
        <PostLikeStatButton postId={postId} likesCount={likesCount} />
        <StyledStatButton variant="empty">
          {commentsCount} Comments
        </StyledStatButton>
      </StyledPostStats>
      <StyledPostActions>
        <PostLikeButton postId={postId} isLikedByMe={isLikedByMe} />
        <PostCommentsSectionButton
          setIsCommentsSectionOpen={setIsCommentsSectionOpen}
        />
        <StyledInteractionButton variant="empty">
          <HiMiniLink />
          Share
        </StyledInteractionButton>
      </StyledPostActions>
      {isCommentsSectionOpen && <PostCommentsSection />}
    </StyledPostInteractions>
  );
}

const StyledPostInteractions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  border-top: 0.1rem solid ${({ theme }) => theme.colors.accent};
  padding-top: ${({ theme }) => theme.spacing.sm};
`;

const StyledPostStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.accent};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StyledStatButton = styled(Button)``;

const StyledPostActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;
