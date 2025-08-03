import type { DetailedHTMLProps, LabelHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

type Props = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & {
  children: ReactNode;
};

export default function Label({ children, ...props }: Props) {
  return <StyledLabel {...props}>{children}</StyledLabel>;
}

const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.accent};
`;
