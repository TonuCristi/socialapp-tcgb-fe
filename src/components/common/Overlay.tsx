import { type ReactNode } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useOverflowHidden } from "../../hooks/useOverflowHidden";

type Props = {
  children: ReactNode;
};

export default function Overlay({ children }: Props) {
  useOverflowHidden();

  return createPortal(<StyledOverlay>{children}</StyledOverlay>, document.body);
}

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ theme }) => theme.width.full};
  min-height: ${({ theme }) => theme.height.screen};
  padding: ${({ theme }) => theme.spacing.sm};
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(39, 39, 42, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;
