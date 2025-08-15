import styled from "styled-components";

import Button from "./Button";
import Icon from "./Icon";

type Props = {
  onClose: () => void;
};

export default function CloseOverlayModalButton({ onClose }: Props) {
  return (
    <StyledCloseModalButton variant="empty" onClick={onClose}>
      <Icon type="close" />
    </StyledCloseModalButton>
  );
}

const StyledCloseModalButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: ${({ theme }) => theme.spacing.xl};
  margin-right: ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.accent};

  :first-child {
    stroke-width: 1;
  }
`;
