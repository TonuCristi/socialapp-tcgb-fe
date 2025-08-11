import styled from "styled-components";

import PostSkeleton from "./PostSkeleton";

export default function PostsLoader() {
  return (
    <StyledPostsLoader>
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </StyledPostsLoader>
  );
}

const StyledPostsLoader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;
