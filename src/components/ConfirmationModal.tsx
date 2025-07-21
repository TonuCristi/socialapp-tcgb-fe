import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import Overlay from "./Overlay";
import Button from "./Button";

type Props = {
  children: ReactNode;
  onConfirm: () => void;
  onReject: () => void;
};

export default function ConfirmationModal({
  children,
  onConfirm,
  onReject,
}: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <Overlay>
      <StyledConfirmationModal>
        <StyledQuestion>{children}</StyledQuestion>
        <StyledButtonsContainer>
          <Button variant="aprove" onClick={onConfirm}>
            Confirm
          </Button>
          <Button variant="reject" onClick={onReject}>
            Reject
          </Button>
        </StyledButtonsContainer>
      </StyledConfirmationModal>
    </Overlay>,
    document.body
  );
}

const StyledConfirmationModal = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 0.15rem solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    width: 85%;
  }

  @media (width < ${({ theme }) => theme.breakpoints["2xs"]}) {
    width: 90%;
  }
`;

const StyledQuestion = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-align: center;
`;

const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};

  @media (width < ${({ theme }) => theme.breakpoints["2xs"]}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;
