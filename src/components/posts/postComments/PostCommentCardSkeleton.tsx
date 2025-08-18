import styled, { css } from "styled-components";

export default function PostCommentCardSkeleton() {
  return (
    <StyledPostCommentCardSkeleton>
      <StyledAvatar />
      <StyledContent />
      <StyledActions />
    </StyledPostCommentCardSkeleton>
  );
}

const StyledPostCommentCardSkeleton = styled.li`
  display: grid;
  align-items: start;
  grid-template-columns: auto 1fr;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const skeleton = css`
  background-color: ${({ theme }) => theme.colors.zinc800};
`;

const StyledAvatar = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  ${skeleton}
`;

const StyledContent = styled.div`
  height: 3rem;
  width: ${({ theme }) => theme.width.full};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  ${skeleton}
`;

const StyledActions = styled.div`
  height: 1rem;
  width: ${({ theme }) => theme.width.full};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  ${skeleton}
  grid-column: 2;
`;
