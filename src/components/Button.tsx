import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styled from "styled-components";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: string;
};

export default function Button({ children, ...props }: Props) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius["3xl"]};
  background: ${({ theme }) => theme.colors.transparent};
  border: 0.15rem solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accent};
  width: 100%;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
