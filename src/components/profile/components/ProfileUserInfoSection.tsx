import styled from "styled-components";

import ProfileSection from "./ProfileSection";
import EditProfileButton from "./EditProfileButton";
import Title from "../../Title";

import { useAppSelector } from "../../../app/hooks";
import { selectCurrentUser } from "../../../features/user/currentUserSlice";
import { StyledDivider } from "./styles";

export default function ProfileUserInfoSection() {
  const user = useAppSelector(selectCurrentUser);

  const userDetails = [
    {
      name: "Username",
      value: user?.username,
    },
    {
      name: "Email",
      value: user?.email,
    },
    {
      name: "Birth date",
      value: user?.birthDate
        ? new Date(user?.birthDate).toLocaleDateString()
        : "",
    },
    {
      name: "Phone number",
      value: user?.phoneNumber,
    },
  ];

  return (
    <StyledProfileUserInfoSection>
      <StyledHeader>
        <Title variant="small">User information</Title>
        <EditProfileButton />
      </StyledHeader>
      <StyledDivider />
      <StyledUserInformation>
        {userDetails.map(({ name, value }) => (
          <StyledUserDetailWrapper key={name}>
            <StyledUserDetailName>{name}</StyledUserDetailName>
            <StyledUserDetail>{value}</StyledUserDetail>
          </StyledUserDetailWrapper>
        ))}
      </StyledUserInformation>
    </StyledProfileUserInfoSection>
  );
}

const StyledProfileUserInfoSection = styled(ProfileSection)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    flex-direction: column;
    align-items: start;
  }
`;

const StyledUserInformation = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    grid-template-columns: 1fr;
  }
`;

const StyledUserDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const StyledUserDetailName = styled.p`
  color: ${({ theme }) => theme.colors.gray400};
`;

const StyledUserDetail = styled.p``;
