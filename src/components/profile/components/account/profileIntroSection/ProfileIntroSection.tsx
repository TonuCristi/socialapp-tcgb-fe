import styled from "styled-components";

import Title from "../../../../Title";
import ProfileStats from "./ProfileStats";
import ProfileBio from "./ProfileBio";
import { StyledProfileSection } from "../../styles";

import { useAppSelector } from "../../../../../app/hooks";
import { selectCurrentUser } from "../../../../../features/user/currentUserSelectors";

export default function ProfileIntroSection() {
  const user = useAppSelector(selectCurrentUser);

  return (
    <StyledProfileIntroSection>
      <StyledAvatar src="src/assets/photo.png" />
      <StyledIntro>
        <Title variant="medium">{user?.username}</Title>
        <ProfileStats />
        <ProfileBio />
      </StyledIntro>
    </StyledProfileIntroSection>
  );
}

const StyledProfileIntroSection = styled(StyledProfileSection)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  z-index: 1;

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    flex-direction: column;
  }
`;

const StyledAvatar = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    width: 5rem;
    height: 5rem;
  }

  @media (width < ${({ theme }) => theme.breakpoints["2xs"]}) {
    width: 3rem;
    height: 3rem;
  }
`;

const StyledIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  width: ${({ theme }) => theme.width.full};
`;
