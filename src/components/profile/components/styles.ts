import styled from "styled-components";

export const StyledProfileSection = styled.section`
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 0.15rem solid ${({ theme }) => theme.colors.accent};
  padding: ${({ theme }) => theme.spacing.md};

  @media (width < ${({ theme }) => theme.breakpoints["2xs"]}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;
