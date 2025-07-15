import styled from "styled-components";

import Page from "../components/Page";
import Title from "../components/Title";
import ProfileIntroSection from "../components/profile/components/ProfileIntroSection";
import ProfileUserInfoSection from "../components/profile/components/ProfileUserInfoSection";

export default function ProfilePage() {
  return (
    <StyledProfilePage>
      <Title variant="large">Profile</Title>
      <StyledDivider />
      <ProfileIntroSection />
      <ProfileUserInfoSection />
    </StyledProfilePage>
  );
}

const StyledProfilePage = styled(Page)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const StyledDivider = styled.div`
  width: ${({ theme }) => theme.width.full};
  height: 0.05rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;
