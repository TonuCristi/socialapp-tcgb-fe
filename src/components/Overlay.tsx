import type { ReactNode } from "react";
import styled from "styled-components";

type Props = { children: ReactNode };

export default function Overlay({ children }: Props) {
  return <StyledOverlay>{children}</StyledOverlay>;
}

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(39, 39, 42, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;
