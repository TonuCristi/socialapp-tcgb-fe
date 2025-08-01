import styled, { css } from "styled-components";

import Button from "../../../common/Button";

import type { PhotoOrderWithLink } from "../../../../types/Post.type";

type Props = {
  photos: PhotoOrderWithLink[];
};

export default function PostPhotos({ photos }: Props) {
  const photosCount = photos.length;

  return (
    <StyledPostPhotos $photosCount={photosCount} data-count={3}>
      {photos.map((photoItem, i) => (
        <StyledPhotoWrapper
          key={photoItem.id}
          variant="empty"
          data-count={i === 2 ? "+3" : undefined}
        >
          <StyledPhoto src={photoItem.photo} />
        </StyledPhotoWrapper>
      ))}
    </StyledPostPhotos>
  );
}

const StyledPostPhotos = styled.div<{ $photosCount: number }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.sm};

  ${({ $photosCount }) => {
    switch ($photosCount) {
      case 1:
        return css`
          grid-template-columns: 1fr;
        `;
      case 2:
        return css``;
      case 3:
        return css`
          :first-child {
            aspect-ratio: 2/1;
            grid-column: span 2;
          }
        `;
      case 4:
        return css``;
      case 5:
        return css`
          :first-child {
            aspect-ratio: 2/1;
            grid-column: span 2;
          }

          > :nth-last-child(-n + 2) {
            display: none;
          }

          > :nth-child(3) {
            position: relative;
          }

          > :nth-child(3)::before {
            content: attr(data-count);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(39, 39, 42, 0.3);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: ${({ theme }) => theme.borderRadius.xl};
            color: ${({ theme }) => theme.colors.white};
            font-size: ${({ theme }) => theme.fontSizes["5xl"]};
            font-weight: ${({ theme }) => theme.fontWeights.semibold};
          }
        `;
      default:
        return css``;
    }
  }}
`;

const StyledPhotoWrapper = styled(Button)`
  aspect-ratio: 1 / 1;
`;

const StyledPhoto = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  aspect-ratio: 1/1;
  object-fit: cover;
  height: ${({ theme }) => theme.height.full};
`;
