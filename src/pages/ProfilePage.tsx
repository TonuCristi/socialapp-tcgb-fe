import styled from "styled-components";
import { useState } from "react";

import Page from "../components/Page";
import Title from "../components/Title";
import ProfileIntroSection from "../components/profile/components/ProfileIntroSection";
import Account from "../components/profile/components/Account";
import Posts from "../components/profile/components/Posts";
import ProfileTabs from "../components/profile/components/ProfileTabs";
import { StyledDivider } from "../components/profile/components/styles";

export type Tab = "posts" | "account";

export type TabsEntries = { value: Tab; text: string }[];

export default function ProfilePage() {
  const [tab, setTab] = useState<Tab>("posts");

  const tabs = {
    posts: { text: "Posts", content: <Posts /> },
    account: { text: "Account", content: <Account /> },
  };

  const tabsEntries = Object.entries(tabs).map((entry) => ({
    value: entry[0],
    text: entry[1].text,
  })) as TabsEntries;

  return (
    <StyledProfilePage>
      <Title variant="large">Profile</Title>
      <StyledDivider />
      <ProfileIntroSection />
      <ProfileTabs tabs={tabsEntries} tab={tab} setTab={setTab} />
      {tabs[tab].content}
    </StyledProfilePage>
  );
}

const StyledProfilePage = styled(Page)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;
