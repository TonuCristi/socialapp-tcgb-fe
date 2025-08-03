import type { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

import Button from "../../common/Button";

import type { Tab } from "../../../pages/ProfilePage";

type Props = {
  tabs: { value: Tab; text: string }[];
  tab: Tab;
  setTab: Dispatch<SetStateAction<Tab>>;
};

export default function ProfileTabs({ tabs, tab, setTab }: Props) {
  return (
    <StyledProfileTabs>
      {tabs.map(({ text, value }) => (
        <StyledTabButton
          key={value}
          variant="empty"
          $isTabSelected={value === tab}
          onClick={() => setTab(value)}
        >
          {text}
        </StyledTabButton>
      ))}
    </StyledProfileTabs>
  );
}

const StyledProfileTabs = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 0.15rem solid ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const StyledTabButton = styled(Button)<{ $isTabSelected: boolean }>`
  width: ${({ theme }) => theme.width.full};
  background-color: ${({ theme, $isTabSelected }) =>
    $isTabSelected ? theme.colors.accent : theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  transition: all 0.1s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
