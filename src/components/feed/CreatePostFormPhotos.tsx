import { type Dispatch, type SetStateAction, type SyntheticEvent } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

import { HiMiniXMark } from "react-icons/hi2";
import Button from "../common/Button";

import type { PhotoOrder } from "../../types/Post.type";

type Props = {
  photosOrder: PhotoOrder[];
  setPhotosOrder: Dispatch<SetStateAction<PhotoOrder[]>>;
};

export default function CreatePostFormPhotos({
  photosOrder,
  setPhotosOrder,
}: Props) {
  const { watch, setValue } = useFormContext();

  const photos = Array.from(watch("photos")) as File[];

  function handlePhotoOrder(photo: File) {
    if (photos.length === 1) return;

    setPhotosOrder((prev) => {
      const foundPhoto = prev.find(
        (photoOrder) => photoOrder.photo.name === photo.name
      );

      if (foundPhoto) {
        return prev
          .filter((photoOrder) => photoOrder.photo.name !== photo.name)
          .map((photoOrder) => ({
            ...photoOrder,
            index:
              foundPhoto.index > photoOrder.index
                ? photoOrder.index
                : photoOrder.index - 1,
          }));
      }

      const photosIndexes = prev.map((photo) => photo.index);

      const biggestIndex = photosIndexes.length
        ? Math.max(...photosIndexes)
        : 0;

      return [...prev, { index: biggestIndex + 1, photo }];
    });
  }

  function handleDeletePhoto(e: SyntheticEvent, photo: File) {
    e.stopPropagation();

    setPhotosOrder((prev) => {
      const foundPhoto = prev.find(
        (photoOrder) => photoOrder.photo.name === photo.name
      );

      return prev
        .filter((photoOrder) => photoOrder.photo.name !== photo.name)
        .map((photoOrder) => ({
          ...photoOrder,
          index:
            foundPhoto && foundPhoto.index > photoOrder.index
              ? photoOrder.index
              : photoOrder.index - 1,
        }));
    });

    const filteredPhotos = photos.filter(
      (photoItem) => photoItem.name !== photo.name
    );

    setValue("photos", filteredPhotos);
  }

  return (
    <StyledPhotosWrapper $photosCount={photos.length}>
      {photos.map((photo, i) => {
        const foundPhoto = photosOrder.find(
          (photoOrder) => photoOrder.photo.name === photo.name
        );

        return (
          <StyledPhotoWrapper key={i} onClick={() => handlePhotoOrder(photo)}>
            {foundPhoto ? (
              <StyledPhotoIndex>{foundPhoto.index}</StyledPhotoIndex>
            ) : null}
            <StyledDeletePhotoButton
              variant="empty"
              onClick={(e) => handleDeletePhoto(e, photo)}
            >
              <HiMiniXMark />
            </StyledDeletePhotoButton>
            <img src={URL.createObjectURL(photo)} />
          </StyledPhotoWrapper>
        );
      })}
    </StyledPhotosWrapper>
  );
}

const StyledPhotosWrapper = styled.div<{ $photosCount: number }>`
  display: grid;
  grid-template-columns: ${({ $photosCount }) =>
    $photosCount === 1 ? "1fr" : "1fr 1fr"};
  gap: ${({ theme }) => theme.spacing.sm};
  max-height: 20rem;
  overflow-y: auto;
  padding-right: ${({ theme }) => theme.spacing.sm};
  align-items: start;

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    grid-template-columns: 1fr;
    align-items: normal;
  }
`;

const StyledPhotoWrapper = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  cursor: pointer;
`;

const StyledPhotoIndex = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 0 0 ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  transition: all 0.1s;

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    width: 2rem;
    height: 2rem;
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const StyledDeletePhotoButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 0 0 0 ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.1s;

  @media (width < ${({ theme }) => theme.breakpoints.xs}) {
    width: 2rem;
    height: 2rem;
    font-size: ${({ theme }) => theme.fontSizes.base};
  }

  :first-child {
    stroke-width: 1;
  }
`;
