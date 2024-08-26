import type { Meta, StoryObj } from '@storybook/react';

import LeftSidebarMenuItem from '@/shared/component/LeftSidebar/LeftSidebarItem/LeftSidebarMenuItem';

const meta = {
  title: 'shared/component/LeftSidebarItem',
  component: LeftSidebarMenuItem,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Team 1',
    isExpanded: true,
    isClicked: true,
    logoUrl: 'src/common/asset/svg/add.svg',
    onClick: () => {},
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof LeftSidebarMenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
