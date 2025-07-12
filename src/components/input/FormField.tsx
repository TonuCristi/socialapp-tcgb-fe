import type { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

export default function FormField({ children }: Props) {
  return <StyledFormField>{children}</StyledFormField>;
}

const StyledFormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;
