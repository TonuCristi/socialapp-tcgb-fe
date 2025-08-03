import styled from "styled-components";

import Button from "../../../common/Button";

export const StyledInteractionButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  :first-child {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    transition: color 0.3s;
  }

  &:hover :first-child {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
