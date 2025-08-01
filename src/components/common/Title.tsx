import type { ReactNode } from "react";
import styled from "styled-components";

type Variant = "large" | "medium" | "small";

type Props = {
  variant: Variant;
  children: ReactNode;
};

const asVariants = {
  large: "h1",
  medium: "h2",
  small: "h3",
};

export default function Title({ variant, children }: Props) {
  return (
    <StyledTitle as={asVariants[variant]} $variant={variant}>
      {children}
    </StyledTitle>
  );
}

const StyledTitle = styled.h1<{ $variant: Variant }>`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  ${({ theme, $variant }) => {
    switch ($variant) {
      case "large":
        return `font-size: ${theme.fontSizes["2xl"]};`;
      case "medium":
        return `font-size: ${theme.fontSizes.xl};`;
      case "small":
        return `font-size: ${theme.fontSizes.lg};`;
      default:
        return ``;
    }
  }}
`;
