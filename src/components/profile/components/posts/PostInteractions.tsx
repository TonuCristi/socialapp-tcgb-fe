import styled from "styled-components";

import Button from "../../../common/Button";
import {
  HiMiniChatBubbleOvalLeft,
  HiMiniHeart,
  HiMiniLink,
} from "react-icons/hi2";

export default function PostInteractions() {
  return (
    <StyledPostInteractions>
      <StyledPostStats>
        <StyledStat>Likes 20</StyledStat>
        <StyledStat>11 Comments</StyledStat>
      </StyledPostStats>
      <StyledPostActions>
        <StyledButton variant="empty">
          <HiMiniHeart />
          Like
        </StyledButton>
        <StyledButton variant="empty">
          <HiMiniChatBubbleOvalLeft />
          Comment
        </StyledButton>
        <StyledButton variant="empty">
          <HiMiniLink />
          Share
        </StyledButton>
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

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  :first-child {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    transition: color 0.3s;
  }

  &:hover :first-child {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
