import styled from "styled-components";
import { Link } from "react-router";

import Button from "../../common/Button";

import type { PostComment } from "../../../types/Post.type";
import { formatPassedTime } from "../../../utils/formatPassedTime";

type Props = {
  comment: PostComment;
};

export default function PostCommentCard({ comment }: Props) {
  const { content, likesCount, createdAt, userUsername } = comment;

  return (
    <StyledPostCommentCard>
      <StyledCommentCreatorLink to="/profile">
        <StyledAvatar src="src/assets/photo.png" />
      </StyledCommentCreatorLink>
      <StyledCommentBody>
        <StyledCommentInfo>
          <StyledCommentCreator>{userUsername}</StyledCommentCreator>
          <span>{formatPassedTime(createdAt)}</span>
        </StyledCommentInfo>
        <StyledCommentContent>{content}</StyledCommentContent>
      </StyledCommentBody>
      <StyledCommentInteractions>
        <Button variant="empty">Like</Button>
        <span>{likesCount} likes</span>
      </StyledCommentInteractions>
    </StyledPostCommentCard>
  );
}

const StyledPostCommentCard = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

const StyledCommentInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const StyledCommentCreatorLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledAvatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  flex-shrink: 0;
`;

const StyledCommentBody = styled.div`
  background-color: ${({ theme }) => theme.colors.zinc800};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.sm};
  width: ${({ theme }) => theme.width.full};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const StyledCommentCreator = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

const StyledCommentContent = styled.div`
  line-height: 1.4;
`;

const StyledCommentInteractions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  grid-column: 2;
`;
