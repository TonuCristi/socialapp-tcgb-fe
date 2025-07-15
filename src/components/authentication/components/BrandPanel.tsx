import styled from "styled-components";

export default function BrandPanel() {
  return <StyledBrandPanel>tcgb</StyledBrandPanel>;
}

const StyledBrandPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  width: ${({ theme }) => theme.width.full};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  font-size: ${({ theme }) => theme.fontSizes["9xl"]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.accent};
  background-color: rgba(39, 39, 42, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  @media (width < ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;
