import styled from "styled-components";

export default function BrandPanel() {
  return (
    <StyledBrandPanel>
      <StyledWrapper>tcgb</StyledWrapper>
    </StyledBrandPanel>
  );
}

const StyledBrandPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};

  @media (width < ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const StyledWrapper = styled.div`
  border: 0.4rem solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  font-size: ${({ theme }) => theme.fontSizes["9xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
`;
