import styled from "styled-components";
import { Link } from "react-router";

import Button from "../../common/Button";

export default function PostCommentCard() {
  return (
    <StyledPostCommentCard>
      <Link to="/profile">
        <StyledAvatar src="src/assets/photo.png" />
      </Link>
      <StyledCommentBody>
        <StyledCommentInfo>
          <StyledCommentCreator>Chester Johnson</StyledCommentCreator>
          <span>3 days ago</span>
        </StyledCommentInfo>
        <StyledCommentContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
          alias. Similique adipisci, veritatis laboriosam aut voluptatibus
          ducimus blanditiis reiciendis ex temporibus omnis architecto minima.
          Autem esse dolore sed exercitationem eius.
        </StyledCommentContent>
        <StyledCommentInteractions>
          <Button variant="empty">Like</Button>
          <Button variant="empty">Reply</Button>
          <StyledCommentLikesCount>3 likes</StyledCommentLikesCount>
        </StyledCommentInteractions>
      </StyledCommentBody>
    </StyledPostCommentCard>
  );
}

const StyledPostCommentCard = styled.div`
  display: flex;
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

const StyledAvatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
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
  gap: ${({ theme }) => theme.spacing.md};
`;

const StyledCommentLikesCount = styled.span`
  margin-left: auto;
`;
