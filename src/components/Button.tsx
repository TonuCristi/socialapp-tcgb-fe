import styled from "styled-components";

const StyledButton = styled.button`
  background-color: red;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.accent};
`;

type Props = {
  children: string;
};

export default function Button({ children }: Props) {
  return <StyledButton>{children}</StyledButton>;
}
