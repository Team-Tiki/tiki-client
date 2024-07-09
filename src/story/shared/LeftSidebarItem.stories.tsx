import type { Meta, StoryObj } from '@storybook/react';

import Add from '@/common/asset/svg/add.svg?react';

import LeftSidebarItem from '@/shared/component/LeftSidebar/LeftSidebarItem/LeftSidebarItem';

const meta = {
  title: 'shared/component/LeftSidebarItem',
  component: LeftSidebarItem,
  parameters: {
    layout: 'centered',
  },
  args: { children: 'Team 1', isExpansion: true, isClicked: true, logo: <Add /> },
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
