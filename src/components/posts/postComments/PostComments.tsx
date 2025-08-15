import styled from "styled-components";

import PostCommentCard from "./PostCommentCard";

export default function PostComments() {
  return (
    <StyledPostComments>
      <PostCommentCard />
    </StyledPostComments>
  );
}

const StyledPostComments = styled.ul`
  height: 100%;
  overflow-y: auto;
`;
