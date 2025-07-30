import styled from "styled-components";

import { Link } from "react-router";
import PostActions from "./PostActions";

export default function Post() {
  return (
    <StyledPost>
      <StyledPostInfoWrapper>
        <Link to="/">
          <StyledAvatar src="src/assets/photo.png" />
        </Link>
        <StyledPostInfo>
          <p>John Johnson</p>
          <p>5h ago</p>
        </StyledPostInfo>
      </StyledPostInfoWrapper>
      <StyledPhotosWrapper>
        <StyledPhoto src="https://jyymomxmtqikxxaoedhf.supabase.co/storage/v1/render/image/public/photos/postsPhotos/688a8ec1587af3d0dc26a7f1-1?width=1920&height=1080&quality=70" />
        <StyledPhoto src="https://jyymomxmtqikxxaoedhf.supabase.co/storage/v1/render/image/public/photos/postsPhotos/688a8ec1587af3d0dc26a7f1-2?width=1920&height=1080&quality=70" />
        <StyledPhoto src="https://jyymomxmtqikxxaoedhf.supabase.co/storage/v1/render/image/public/photos/postsPhotos/688a8ec1587af3d0dc26a7f1-3?width=1920&height=1080&quality=70" />
        <StyledPhoto src="https://jyymomxmtqikxxaoedhf.supabase.co/storage/v1/render/image/public/photos/postsPhotos/688a8ec1587af3d0dc26a7f1-4?width=1920&height=1080&quality=70" />
        <StyledPhoto src="https://jyymomxmtqikxxaoedhf.supabase.co/storage/v1/render/image/public/photos/postsPhotos/688a8ec1587af3d0dc26a7f1-5?width=1920&height=1080&quality=70" />
      </StyledPhotosWrapper>
      <PostActions />
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
`;

const StyledPostInfoWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const StyledPostInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

const StyledAvatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
`;

const StyledPhotosWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const StyledPhoto = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius.xl};
`;
