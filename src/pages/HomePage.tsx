import styled from "styled-components";

import Page from "../components/Page";
import Title from "../components/Title";
import CreatePost from "../components/posts/components/CreatePost";
import { StyledDivider } from "../components/profile/components/styles";

export default function HomePage() {
  return (
    <StyledHomePage>
      <Title variant="large">Feed</Title>
      <StyledDivider />
      <CreatePost />
    </StyledHomePage>
  );
}

const StyledHomePage = styled(Page)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;
