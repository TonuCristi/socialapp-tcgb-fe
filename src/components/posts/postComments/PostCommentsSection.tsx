import styled from "styled-components";

import AddPostCommentForm from "./AddPostCommentForm";
import PostComments from "./PostComments";

export default function PostCommentsSection() {
  return (
    <StyledPostCommentsSection>
      <PostComments />
      <AddPostCommentForm />
    </StyledPostCommentsSection>
  );
}

const StyledPostCommentsSection = styled.div`
  border: 0.15rem solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  height: 20rem;

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;
