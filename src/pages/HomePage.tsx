import styled from "styled-components";

import Page from "../components/common/Page";
import Title from "../components/common/Title";
import CreatePostButton from "../components/posts/components/CreatePostButton";
import { StyledDivider } from "../components/profile/components/styles";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <StyledHomePage>
      <Title variant="large">Feed</Title>
      <StyledDivider />
      <StyledCreatePostSection>
        <StyledProfileLink to="/profile">
          <StyledAvatar src="src/assets/photo.png" />
        </StyledProfileLink>
        <CreatePostButton />
      </StyledCreatePostSection>
    </StyledHomePage>
  );
}

const StyledHomePage = styled(Page)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const StyledCreatePostSection = styled.section`
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 0.15rem solid ${({ theme }) => theme.colors.accent};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (width < ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

const StyledProfileLink = styled(Link)`
  border-radius: ${({ theme }) => theme.borderRadius.full};

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    display: none;
  }
`;

const StyledAvatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  max-width: none;
`;
