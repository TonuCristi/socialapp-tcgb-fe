import styled from "styled-components";
import { useAppSelector } from "../../../../../app/hooks";
import { selectCurrentUser } from "../../../../../features/user/currentUserSelectors";

import Title from "../../../../common/Title";
import EditProfileButton from "./EditProfileButton";
import { StyledProfileSection } from "../../styles";
import { StyledDivider } from "../../../../styles/styles";

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
        {userDetails.map(({ name, value }) => {
          if ((name === "Birth date" || name === "Phone number") && !value)
            return null;

          return (
            <StyledUserDetailWrapper key={name}>
              <StyledUserDetailName>{name}</StyledUserDetailName>
              <p>{value}</p>
            </StyledUserDetailWrapper>
          );
        })}
      </StyledUserInformation>
    </StyledProfileUserInfoSection>
  );
}

const StyledProfileUserInfoSection = styled(StyledProfileSection)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  @media (width < ${({ theme }) => theme.breakpoints["2xs"]}) {
    flex-direction: column;
    align-items: start;
    width: ${({ theme }) => theme.width.full};
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
