import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import Tab from '@/common/component/Tabs/Tab';
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
  args: { children: <></> },
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
          <Tab tabId={0} selectedTab={selectedTab} onTabClick={handleTabClick} variant="round">
            선택된 블록
          </Tab>
          <Tab tabId={1} selectedTab={selectedTab} onTabClick={handleTabClick} variant="round">
            전체 문서
          </Tab>
        </TabList>
        <TabPanel selectedTab={selectedTab}>
          <div>1번 탭</div>
          <div>2번 탭</div>
        </TabPanel>
      </Tabs>
    );
  },
};
