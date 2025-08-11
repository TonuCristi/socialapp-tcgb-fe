import styled from "styled-components";

export const StyledDivider = styled.div`
  width: ${({ theme }) => theme.width.full};
  height: 0.05rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;

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
