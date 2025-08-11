import styled, { css } from "styled-components";

export default function PostSkeleton() {
  return (
    <StyledPostSkeleton>
      <StyledHeader />
      <StyledContent />
      <StyledPhoto />
      <StyledInteractions />
    </StyledPostSkeleton>
  );
}

const StyledPostSkeleton = styled.li`
  border: 0.15rem solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

const skeleton = css`
  width: ${({ theme }) => theme.width.full};
  background-color: ${({ theme }) => theme.colors.zinc800};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
`;

const StyledHeader = styled.div`
  height: 2rem;
  ${skeleton}
`;

const StyledContent = styled.div`
  height: 1rem;
  ${skeleton}
`;

const StyledPhoto = styled.div`
  height: 10rem;
  ${skeleton}
`;

const StyledInteractions = styled.div`
  height: 2rem;
  ${skeleton}
`;
