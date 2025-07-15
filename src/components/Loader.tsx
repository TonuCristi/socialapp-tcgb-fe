import styled, { keyframes } from "styled-components";

export default function Loader() {
  return (
    <StyledWrapper>
      <StyledLoader />
      <StyledAppName>tcgb</StyledAppName>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  width: 100%;
  height: 100%;
  border: 0.5rem solid ${({ theme }) => theme.colors.zinc800};
  border-right: 0.5rem solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  position: relative;
  animation: ${rotate} 1s linear infinite;
`;

const StyledAppName = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;
