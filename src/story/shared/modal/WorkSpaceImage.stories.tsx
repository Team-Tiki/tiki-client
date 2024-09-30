import type { Meta, StoryObj } from '@storybook/react';

import { WorkSpaceProvider } from '@/shared/component/Modal/hook/useWorkSpaceContext';
import WorkSpaceImage from '@/shared/component/WorkSpaceModal/image/WorkSpaceImage';

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
    isVisible: true,
  },
};
