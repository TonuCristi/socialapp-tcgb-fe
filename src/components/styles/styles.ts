import styled from "styled-components";

export const StyledFormFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;
