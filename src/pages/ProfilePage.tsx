import styled from "styled-components";

import Page from "../components/Page";
import Title from "../components/Title";
import ProfileIntroSection from "../components/profile/components/ProfileIntroSection";
import ProfileUserInfoSection from "../components/profile/components/ProfileUserInfoSection";
import ChangePasswordSection from "../components/profile/components/ChangePasswordSection";
import { StyledDivider } from "../components/profile/components/styles";

export default function ProfilePage() {
  return (
    <StyledProfilePage>
      <Title variant="large">Profile</Title>
      <StyledDivider />
      <ProfileIntroSection />
      <ProfileUserInfoSection />
      <ChangePasswordSection />
    </StyledProfilePage>
  );
}

const StyledProfilePage = styled(Page)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;
