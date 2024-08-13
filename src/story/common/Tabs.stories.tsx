import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import RoundTab from '@/common/component/Tabs/Tab/RoundTab';
import TabList from '@/common/component/Tabs/TabList';
import TabPanel from '@/common/component/Tabs/TabPanel';
import Tabs from '@/common/component/Tabs/Tabs';

const meta = {
  title: 'Common/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;
type Story = StoryObj<typeof meta>;

export default meta;

export const TabsTest: Story = {
  render: () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabClick = (tabId: number) => {
      setSelectedTab(tabId);
    };
    return (
      <Tabs>
        <TabList>
          <RoundTab tabId={0} selectedTab={selectedTab} onTabClick={handleTabClick}>
            선택된 블록
          </RoundTab>
          <RoundTab tabId={1} selectedTab={selectedTab} onTabClick={handleTabClick}>
            전체 문서
          </RoundTab>
        </TabList>
        <TabPanel selectedTab={selectedTab}>
          <div>1번 탭</div>
          <div>2번 탭</div>
        </TabPanel>
      </Tabs>
    );
  },
};
