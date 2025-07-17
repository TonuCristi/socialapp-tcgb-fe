import styled from "styled-components";

export const StyledDivider = styled.div`
  width: ${({ theme }) => theme.width.full};
  height: 0.05rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;
