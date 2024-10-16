import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import { Tab } from '@/common/component/Tab';

const meta = {
  title: 'Common/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { children: <></> },
} satisfies Meta<typeof Tab>;
type Story = StoryObj<typeof meta>;

export default meta;

export const Tabtest: Story = {
  render: () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabClick = (tabId: number) => {
      setSelectedTab(tabId);
    };
    return (
      <Tab>
        <Tab.List selectedTab={selectedTab} onTabClick={handleTabClick}>
          <Tab.Button variant="round">선택된 블록</Tab.Button>
          <Tab.Button variant="round">전체 문서</Tab.Button>
        </Tab.List>
        <Tab.Panel selectedTab={selectedTab}>
          <div>1번 탭</div>
          <div>2번 탭</div>
        </Tab.Panel>
      </Tab>
    );
  },
};
