import styled from "styled-components";

import AddPostCommentForm from "./AddPostCommentForm";
import PostComments from "./PostComments";

const mockComments = [
  {
    comment: "111",
    replies: [
      {
        comment: "222",
        replies: [],
      },
      {
        comment: "333",
        replies: [],
      },
    ],
  },
  {
    comment: "444",
    replies: [
      {
        comment: "555",
        replies: [],
      },
      {
        comment: "777",
        replies: [
          {
            comment: "888",
            replies: [
              {
                comment: "999",
                replies: [],
              },
              {
                comment: "101",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default function PostCommentsSection() {
  return (
    <StyledPostCommentsSection>
      <StyledPostCommentsWrapper>
        <PostComments comments={mockComments} index={0} />
      </StyledPostCommentsWrapper>
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
`;

const StyledPostCommentsWrapper = styled.ul`
  height: 100%;
  overflow-y: auto;
`;
