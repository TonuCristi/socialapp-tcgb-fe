import { useState } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import Button from "../../Button";

export default function CreatePostFormPhotos() {
  const [photosOrder, setPhotosOrder] = useState<
    { index: number; photo: File }[]
  >([]);

  const { watch, getValues } = useFormContext();

  function handlePhotoOrder(photo: File) {
    const photos = getValues("photos");

    // const smallestIndex = photosIndexes.length ? Math.min(...photosIndexes) : 0;

    // console.log(biggestIndex);

    setPhotosOrder((prev) => {
      const foundPhoto = prev.find(
        (photoOrder) => photoOrder.photo.name === photo.name
      );

      if (foundPhoto) {
        return prev.filter(
          (photoOrder) => photoOrder.photo.name !== photo.name
        );
        //   .map((photoOrder) => ({
        //     ...photoOrder,
        //     index: photoOrder.index - 1,
        //   }));
      }

      const photosIndexes = photosOrder.map((photo) => photo.index);

      const biggestIndex = photosIndexes.length
        ? Math.max(...photosIndexes)
        : 0;

      return [...prev, { index: biggestIndex + 1, photo }];
    });

    // console.log(photo);
  }

  console.log(photosOrder);

  const photos = Array.from(watch("photos")) as File[];

  return (
    <StyledPhotosWrapper>
      {photos.map((photo, i) => {
        const foundPhoto = photosOrder.find(
          (photoOrder) => photoOrder.photo.name === photo.name
        );

        return (
          <StyledPhotoWrapper
            key={i}
            $index={1}
            variant="empty"
            onClick={() => handlePhotoOrder(photo)}
          >
            {foundPhoto ? (
              <StyledPhotoIndex>{foundPhoto.index}</StyledPhotoIndex>
            ) : null}
            <StyledPhoto src={URL.createObjectURL(photo)} />
          </StyledPhotoWrapper>
        );
      })}
    </StyledPhotosWrapper>
  );
}

const StyledPhotosWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const StyledPhotoWrapper = styled(Button)<{ $index: number }>`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;

  &:hover :first-child {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.accent};
  }
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
`;

const StyledPhoto = styled.img``;
