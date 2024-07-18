import type { Meta, StoryObj } from '@storybook/react';

import LeftSidebar from '@/shared/component/LeftSidebar/LeftSidebar';

const meta = {
  title: 'shared/component/LeftSidebar',
  component: LeftSidebar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LeftSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
