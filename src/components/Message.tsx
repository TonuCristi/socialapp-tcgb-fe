import type { ReactNode } from "react";
import styled from "styled-components";

type Variant = "error";

type Props = {
  children: ReactNode;
  variant?: Variant;
};

export default function Message({ children, variant }: Props) {
  return <StyledMessage $variant={variant}>{children}</StyledMessage>;
}

const StyledMessage = styled.p<{ $variant?: Variant }>`
  ${({ $variant, theme }) => {
    switch ($variant) {
      case "error":
        return `
            color: ${theme.colors.danger}
        `;
      default:
        return ``;
    }
  }}
`;
