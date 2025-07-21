import styled from "styled-components";

export const StyledProfileSection = styled.section`
  background-color: rgba(39, 39, 42, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 0.15rem solid ${({ theme }) => theme.colors.accent};
  padding: ${({ theme }) => theme.spacing.md};

  @media (width < ${({ theme }) => theme.breakpoints["2xs"]}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const StyledDivider = styled.div`
  width: ${({ theme }) => theme.width.full};
  height: 0.05rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;
