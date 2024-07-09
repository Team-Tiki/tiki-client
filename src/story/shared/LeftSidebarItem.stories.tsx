import type { Meta, StoryObj } from '@storybook/react';

import LeftSidebarItem from '@/shared/component/LeftSidebar/LeftSidebarItem/LeftSidebarItem';

const meta = {
  title: 'shared/component/LeftSidebarItem',
  component: LeftSidebarItem,
  parameters: {
    layout: 'centered',
  },
  args: { children: 'Team 1', isExpansion: true, isClicked: true, url: 'src/common/asset/svg/add.svg' },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof LeftSidebarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
