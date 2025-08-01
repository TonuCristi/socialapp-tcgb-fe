import styled from "styled-components";

import PostInteractions from "./PostInteractions";
import PostPhotos from "./PostPhotos";
import { Link } from "react-router";

import { useAppSelector } from "../../../../app/hooks";
import { selectCurrentUser } from "../../../../features/user/currentUserSelectors";
import type { Post } from "../../../../types/Post.type";

type Props = {
  post: Post;
};

export default function Post({ post }: Props) {
  const user = useAppSelector(selectCurrentUser);
  const { content, createdAt } = post;

  return (
    <StyledPost>
      <StyledPostInfoWrapper>
        <Link to="/profile">
          <StyledAvatar src="src/assets/photo.png" />
        </Link>
        <StyledPostInfo>
          <p>{user?.username}</p>
          <p>{new Date(createdAt).toDateString()}</p>
        </StyledPostInfo>
      </StyledPostInfoWrapper>
      {content && <StyledContent>{content}</StyledContent>}
      <PostPhotos photos={post.photos} />
      <PostInteractions />
    </StyledPost>
  );
}

const StyledPost = styled.div`
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

const StyledPostInfoWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const StyledAvatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
`;

const StyledPostInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

const StyledContent = styled.pre``;
