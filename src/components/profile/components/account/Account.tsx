import styled from "styled-components";
import ProfileUserInfoSection from "./profileUserInfoSection/ProfileUserInfoSection";
import ChangePasswordSection from "./changePasswordSection/ChangePasswordSection";

export default function Account() {
  return (
    <StyledAccount>
      <ProfileUserInfoSection />
      <ChangePasswordSection />
    </StyledAccount>
  );
}

const StyledAccount = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;
