import type { Meta, StoryObj } from '@storybook/react';

import WorkSpaceComplete from '@/shared/component/createWorkSpace/complete/WorkSpaceComplete';

const meta = {
  title: 'page/Modal/WorkSpaceComplete',
  component: WorkSpaceComplete,

  args: {
    isComplete: (isComplete: boolean) => {
      isComplete;
    },
  },
  argTypes: {},
} satisfies Meta<typeof WorkSpaceComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Complete: Story = {};
