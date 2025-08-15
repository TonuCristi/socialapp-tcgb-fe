import { useState } from "react";
import styled from "styled-components";

import Button from "../common/Button";

type Props = {
  children: string;
};

export default function PostContent({ children }: Props) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const newLinesCount = children.split("\n").length;

  const text = children.split("\n").splice(0, 3).join("\n");

  return (
    <StyledPostContent>
      {!isExpanded && (newLinesCount >= 3 || children.length >= 80) ? (
        <>
          {children.length >= 80 ? children.slice(0, 80) : text}
          <span>...</span>
          <StyledShowMoreButton
            variant="empty"
            onClick={() => setIsExpanded(true)}
          >
            Show more
          </StyledShowMoreButton>
        </>
      ) : (
        children
      )}
    </StyledPostContent>
  );
}

const StyledPostContent = styled.p`
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-break: break-word;
`;

const StyledShowMoreButton = styled(Button)`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;
