import type { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

import Overlay from "../common/Overlay";
import CloseOverlayModalButton from "../common/CloseOverlayModalButton";
import Button from "../common/Button";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";

import { useOverflowHidden } from "../../hooks/useOverflowHidden";
import type { PhotoOrderWithLink } from "../../types/Post.type";

type Props = {
  photos: PhotoOrderWithLink[];
  currentPhoto: number;
  setCurrentPhoto: Dispatch<SetStateAction<number>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function PostPhotosSilder({
  photos,
  currentPhoto,
  setCurrentPhoto,
  setIsOpen,
}: Props) {
  useOverflowHidden();

  return (
    <Overlay>
      <CloseOverlayModalButton onClose={() => setIsOpen(false)} />
      <StyledSlider>
        {photos.length === 1 || (
          <StyledSliderPrevButton
            variant="empty"
            onClick={() => {
              setCurrentPhoto((prev) =>
                prev > 0 ? prev - 1 : photos.length - 1
              );
            }}
          >
            <HiMiniChevronLeft />
          </StyledSliderPrevButton>
        )}
        <StyledPhotoWrapper>
          <StyledPhoto src={photos[currentPhoto].photo} />
        </StyledPhotoWrapper>
        {photos.length === 1 || (
          <StyledSliderNextButton
            variant="empty"
            onClick={() => {
              setCurrentPhoto((prev) =>
                prev < photos.length - 1 ? prev + 1 : 0
              );
            }}
          >
            <HiMiniChevronRight />
          </StyledSliderNextButton>
        )}
      </StyledSlider>
    </Overlay>
  );
}

const StyledSlider = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 0.15rem solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.md};
  width: 60rem;
  height: 70dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  overflow: hidden;

  @media (width < ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.sm};
    gap: ${({ theme }) => theme.spacing.sm};
  }

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    height: 50dvh;
  }
`;

const StyledPhotoWrapper = styled.div`
  height: ${({ theme }) => theme.height.full};
  width: ${({ theme }) => theme.width.full};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const StyledPhoto = styled.img`
  max-height: ${({ theme }) => theme.height.full};
  max-width: ${({ theme }) => theme.width.full};
  object-fit: contain;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
`;

const StyledSliderPrevButton = styled(Button)`
  position: absolute;
  transform: translateY(-50%);
  left: 5%;
  top: 50%;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.accent};
  border: 0.15rem solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  padding: ${({ theme }) => theme.spacing.xs};

  :first-child {
    stroke-width: 1;
  }
`;

const StyledSliderNextButton = styled(StyledSliderPrevButton)`
  left: auto;
  right: 5%;
`;
