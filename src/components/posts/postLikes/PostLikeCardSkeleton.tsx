import styled, { css } from "styled-components";

export default function PostLikeCardSkeleton() {
  return (
    <StyledSearchPostLikeCardSkeleton>
      <StyledAvatar />
      <StyledContent />
    </StyledSearchPostLikeCardSkeleton>
  );
}

const StyledSearchPostLikeCardSkeleton = styled.li`
  border: 0.15rem solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const skeleton = css`
  background-color: ${({ theme }) => theme.colors.zinc800};
`;

const StyledAvatar = styled.div`
  height: 2rem;
  flex: 1 0 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  ${skeleton}
`;

const StyledContent = styled.div`
  height: 2rem;
  width: ${({ theme }) => theme.width.full};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  ${skeleton}
`;
