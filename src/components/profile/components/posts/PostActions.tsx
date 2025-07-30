import styled from "styled-components";
import Button from "../../../Button";
import {
  HiMiniChatBubbleOvalLeft,
  HiMiniHeart,
  HiMiniLink,
} from "react-icons/hi2";

export default function PostActions() {
  return (
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
  );
}

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
