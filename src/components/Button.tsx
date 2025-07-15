import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import styled from "styled-components";

type Variant = "primary" | "aprove" | "reject" | "empty";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: ReactNode;
  variant?: Variant;
};

export default function Button({ children, variant, ...props }: Props) {
  return (
    <StyledButton $variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ $variant?: Variant }>`
  border: none;
  background: none;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  ${({ theme, $variant }) => {
    switch ($variant) {
      case "primary":
        return `font-weight: ${theme.fontWeights.semibold};
                padding: ${theme.spacing.sm};
                border-radius: ${theme.borderRadius["3xl"]};
                background: ${theme.colors.transparent};
                border: 0.15rem solid ${theme.colors.accent};
                color: ${theme.colors.accent}
                width: 100%;
                transition: background 0.3s;

                &:hover {
                  background: ${theme.colors.primary};
                }`;
      case "aprove":
        return `background: ${theme.colors.succes};
                padding: ${`${theme.spacing.sm} ${theme.spacing.lg}`};
                border-radius: ${theme.borderRadius["3xl"]};
                font-weight: ${theme.fontWeights.semibold};
                width: 100%;
                transition: background 0.3s;
                
                &:hover {
                  background: ${theme.colors.succesLight};
                  }`;
      case "reject":
        return `background: ${theme.colors.danger};
                padding: ${`${theme.spacing.sm} ${theme.spacing.lg}`};
                border-radius: ${theme.borderRadius["3xl"]};
                font-weight: ${theme.fontWeights.semibold};
                width: 100%;
                transition: background 0.3s;

                &:hover {
                  background: ${theme.colors.dangerLight};
                }`;
      case "empty":
        return ``;
      default:
        return `font-weight: ${theme.fontWeights.semibold};
                padding: ${theme.spacing.sm};
                border-radius: ${theme.borderRadius["3xl"]};
                background: ${theme.colors.transparent};
                border: 0.15rem solid ${theme.colors.accent};
                color: ${theme.colors.accent}
                width: 100%;
                transition: background 0.3s;

                &:hover {
                  background: ${theme.colors.primary};
                }`;
    }
  }}
`;
