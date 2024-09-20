import type { Meta, StoryObj } from '@storybook/react';

import WorkSpaceImage from '@/shared/component/workSpaceModal/image/WorkSpaceImage';
import { WorkSpaceProvider } from '@/shared/hook/common/useWorkSpaceContext';

const meta = {
  title: 'page/Modal/WorkSpaceImage',
  component: WorkSpaceImage,
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
} satisfies Meta<typeof WorkSpaceImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Image: Story = {
  args: {
    step: 3,
  },
};
