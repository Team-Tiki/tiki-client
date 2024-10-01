import type { Meta, StoryObj } from '@storybook/react';

import WorkSpaceCategory from '@/shared/component/workSpaceModal/category/WorkSpaceCategory';
import { WorkSpaceProvider } from '@/shared/hook/common/useWorkSpaceContext';

const meta = {
  title: 'page/Modal/WorkSpaceCategory',
  component: WorkSpaceCategory,
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
} satisfies Meta<typeof WorkSpaceCategory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Category: Story = {
  args: {
    isVisible: true,
  },
};
