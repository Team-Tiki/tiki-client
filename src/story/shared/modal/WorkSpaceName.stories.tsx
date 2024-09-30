import type { Meta, StoryObj } from '@storybook/react';

import { WorkSpaceProvider } from '@/shared/component/Modal/hook/useWorkSpaceContext';
import WorkSpaceName from '@/shared/component/WorkSpaceModal/name/WorkSpaceName';

const meta = {
  title: 'page/Modal/WorkSpaceName',
  component: WorkSpaceName,
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
} satisfies Meta<typeof WorkSpaceName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Name: Story = {
  args: {
    isVisible: true,
  },
};
