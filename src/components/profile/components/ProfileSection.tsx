import type { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

export default function ProfileSection({ children, ...props }: Props) {
  return <StyledProfileSection {...props}>{children}</StyledProfileSection>;
}

const StyledProfileSection = styled.section`
  background-color: rgba(39, 39, 42, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 0.15rem solid ${({ theme }) => theme.colors.accent};
  padding: ${({ theme }) => theme.spacing.md};
`;
