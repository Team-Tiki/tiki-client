import type { Meta, StoryObj } from '@storybook/react';

import { WorkSpaceProvider } from '@/shared/component/Modal/hook/useWorkSpaceContext';
import WorkSpaceCategory from '@/shared/component/WorkSpaceModal/category/WorkSpaceCategory';

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
    step: 2,
  },
};
