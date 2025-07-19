import styled from "styled-components";

export default function ProfileStats() {
  return (
    <StyledProfileStats>
      <StyledProfileStat>
        <div>0</div>
        <div>Posts</div>
      </StyledProfileStat>
      <StyledProfileStat>
        <div>0</div>
        <div>Following</div>
      </StyledProfileStat>
      <StyledProfileStat>
        <div>0</div>
        <div>Followers</div>
      </StyledProfileStat>
    </StyledProfileStats>
  );
}

const StyledProfileStats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (width < ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const StyledProfileStat = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  word-break: break-all;
`;
