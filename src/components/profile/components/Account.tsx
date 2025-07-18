import styled from "styled-components";
import ChangePasswordSection from "./ChangePasswordSection";
import ProfileUserInfoSection from "./ProfileUserInfoSection";

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
