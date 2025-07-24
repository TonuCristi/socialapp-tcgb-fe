import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import styled, { css } from "styled-components";

export type Variant = "primary" | "aprove" | "reject" | "empty";

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
        return css`
          font-weight: ${theme.fontWeights.semibold};
          padding: ${theme.spacing.sm};
          border-radius: ${theme.borderRadius["3xl"]};
          background: ${theme.colors.transparent};
          border: 0.15rem solid ${theme.colors.accent};
          color: ${theme.colors.accent};
          width: ${theme.width.full};
          transition: all 0.1s;

          &:hover {
            background: ${theme.colors.primary};
          }
        `;
      case "aprove":
        return css`
          background: ${theme.colors.succes};
          padding: ${`${theme.spacing.sm} ${theme.spacing.lg}`};
          border-radius: ${theme.borderRadius["3xl"]};
          font-weight: ${theme.fontWeights.semibold};
          width: ${theme.width.full};
          transition: all 0.1s;

          &:hover {
            background: ${theme.colors.succesLight};
          }
        `;
      case "reject":
        return css`
          background: ${theme.colors.danger};
          padding: ${`${theme.spacing.sm} ${theme.spacing.lg}`};
          border-radius: ${theme.borderRadius["3xl"]};
          font-weight: ${theme.fontWeights.semibold};
          width: ${theme.width.full};
          transition: all 0.1s;

          &:hover {
            background: ${theme.colors.dangerLight};
          }
        `;
      case "empty":
        return css``;
      default:
        return css`
          font-weight: ${theme.fontWeights.semibold};
          padding: ${theme.spacing.sm};
          border-radius: ${theme.borderRadius["3xl"]};
          background: ${theme.colors.transparent};
          border: 0.15rem solid ${theme.colors.accent};
          color: ${theme.colors.accent};
          width: ${theme.width.full};
          transition: all 0.1s;

          &:hover {
            background: ${theme.colors.primary};
          }
        `;
    }
  }}
`;
