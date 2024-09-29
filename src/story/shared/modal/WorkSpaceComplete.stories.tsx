import type { Meta, StoryObj } from '@storybook/react';

import { WorkSpaceProvider } from '@/shared/component/Modal/hook/useWorkSpaceContext';
import WorkSpaceComplete from '@/shared/component/WorkSpaceModal/complete/WorkSpaceComplete';

const meta = {
  title: 'page/Modal/WorkSpaceComplete',
  component: WorkSpaceComplete,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <WorkSpaceProvider>
        <Story />
      </WorkSpaceProvider>
    ),
  ],
} satisfies Meta<typeof WorkSpaceComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Complete: Story = {
  args: {
    step: 4,
  },
};
