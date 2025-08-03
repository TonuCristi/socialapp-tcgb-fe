import styled from "styled-components";

import PostLikeButton from "./PostLikeButton";
import { HiMiniChatBubbleOvalLeft, HiMiniLink } from "react-icons/hi2";
import { StyledInteractionButton } from "./styles";

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
  return (
    <StyledPostInteractions>
      <StyledPostStats>
        <StyledStat>Likes {likesCount}</StyledStat>
        <StyledStat>{commentsCount} Comments</StyledStat>
      </StyledPostStats>
      <StyledPostActions>
        <PostLikeButton postId={postId} isLikedByMe={isLikedByMe} />
        <StyledInteractionButton variant="empty">
          <HiMiniChatBubbleOvalLeft />
          Comment
        </StyledInteractionButton>
        <StyledInteractionButton variant="empty">
          <HiMiniLink />
          Share
        </StyledInteractionButton>
      </StyledPostActions>
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

const StyledStat = styled.div``;

const StyledPostActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;
