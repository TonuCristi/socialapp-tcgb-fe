import type { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

import Overlay from "../../../common/Overlay";
import Button from "../../../common/Button";
import {
  HiMiniChevronLeft,
  HiMiniChevronRight,
  HiMiniXMark,
} from "react-icons/hi2";

import { useOverflowHidden } from "../../../../hooks/useOverflowHidden";
import type { PhotoOrderWithLink } from "../../../../types/Post.type";

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
      <StyledCloseModalButton variant="empty" onClick={() => setIsOpen(false)}>
        <HiMiniXMark />
      </StyledCloseModalButton>
      <StyledSlider $isSinglePhoto={photos.length === 1}>
        <StyledPhoto src={photos[currentPhoto].photo} />

        {photos.length > 1 && (
          <StyledSliderControlsWrapper>
            <StyledSliderControlButton
              variant="empty"
              onClick={() => {
                setCurrentPhoto((prev) =>
                  prev > 0 ? prev - 1 : photos.length - 1
                );
              }}
            >
              <HiMiniChevronLeft />
            </StyledSliderControlButton>
            <StyledSliderControlButton
              variant="empty"
              onClick={() => {
                setCurrentPhoto((prev) =>
                  prev < photos.length - 1 ? prev + 1 : 0
                );
              }}
            >
              <HiMiniChevronRight />
            </StyledSliderControlButton>
          </StyledSliderControlsWrapper>
        )}
      </StyledSlider>
    </Overlay>
  );
}

const StyledCloseModalButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: ${({ theme }) => theme.spacing.xl};
  margin-right: ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.accent};

  :first-child {
    stroke-width: 1;
  }
`;

const StyledSlider = styled.div<{ $isSinglePhoto: boolean }>`
  position: relative;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 0.15rem solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.md};
  width: 60rem;
  display: grid;
  grid-template-columns: "1fr";
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  @media (width < ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.sm};
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const StyledPhoto = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius.xl};
`;

const StyledSliderControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  width: 50%;
  margin: 0 auto;

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    width: 100%;
  }
`;

const StyledSliderControlButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.accent};
  border: 0.15rem solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  padding: ${({ theme }) => theme.spacing.xs};

  :first-child {
    stroke-width: 1;
  }
`;
