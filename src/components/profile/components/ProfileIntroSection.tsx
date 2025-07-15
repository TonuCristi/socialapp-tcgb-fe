import styled from "styled-components";

import ProfileSection from "./ProfileSection";
import Title from "../../Title";

import { useAppSelector } from "../../../app/hooks";
import { selectCurrentUser } from "../../../features/user/currentUserSlice";

export default function ProfileIntroSection() {
  const user = useAppSelector(selectCurrentUser);

  return (
    <StyledProfileIntroSection>
      <StyledAvatar src="src/assets/photo.png" />
      <StyledIntro>
        <Title variant="medium">{user?.username}</Title>
        <StyledBio>{user?.bio}</StyledBio>
      </StyledIntro>
    </StyledProfileIntroSection>
  );
}

const StyledProfileIntroSection = styled(ProfileSection)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    gap: ${({ theme }) => theme.spacing.sm};
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

  @media (width < ${({ theme }) => theme.breakpoints.xxs}) {
    width: 3rem;
    height: 3rem;
  }
`;

const StyledIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const StyledBio = styled.p`
  word-break: break-word;
`;
