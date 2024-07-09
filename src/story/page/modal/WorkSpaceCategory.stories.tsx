import type { Meta, StoryObj } from '@storybook/react';

import WorkSpaceCategory from '@/shared/component/createWorkSpace/category/WorkSpaceCategory';

const meta = {
  title: 'page/Modal/WorkSpace',
  component: WorkSpaceCategory,

  args: {
    onNext: () => {},
  },
  argTypes: {},
} satisfies Meta<typeof WorkSpaceCategory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Category: Story = {};
