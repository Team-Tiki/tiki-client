import type { Meta, StoryObj } from '@storybook/react';
import { TabButton, TabList, TabPanel, TabRoot } from '@tiki/ui';

import { useState } from 'react';

const meta = {
  title: 'Common/Tab',
  component: TabRoot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { children: <></> },
} satisfies Meta<typeof TabRoot>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Tabtest: Story = {
  render: () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabClick = (tabId: number) => {
      setSelectedTab(tabId);
    };
    return (
      <TabRoot>
        <TabList selectedTab={selectedTab} onTabClick={handleTabClick}>
          <TabButton variant="round">선택된 블록</TabButton>
          <TabButton variant="round">전체 문서</TabButton>
        </TabList>
        <TabPanel selectedTab={selectedTab}>
          <div>1번 탭</div>
          <div>2번 탭</div>
        </TabPanel>
      </TabRoot>
    );
  },
};
