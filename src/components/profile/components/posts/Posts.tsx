import styled from "styled-components";

import Post from "./Post";

export default function Posts() {
  return (
    <StyledPosts>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </StyledPosts>
  );
}

const StyledPosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;
