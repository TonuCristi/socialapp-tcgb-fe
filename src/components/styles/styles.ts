import styled from "styled-components";

export const StyledFormFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const StyledLoaderWrapper = styled.div`
  width: ${({ theme }) => theme.width.full};
  height: ${({ theme }) => theme.height.screen};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
