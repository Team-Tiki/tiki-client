import type { Meta, StoryObj } from '@storybook/react';

import WorkSpaceComplete from '@/shared/component/createWorkSpace/complete/WorkSpaceComplete';

const meta = {
  title: 'page/Modal/WorkSpace',
  component: WorkSpaceComplete,

  args: {},
  argTypes: {},
} satisfies Meta<typeof WorkSpaceComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Complete: Story = {};
