import type { Meta, StoryObj } from '@storybook/react';

import WorkSpaceCategory from '@/shared/component/createWorkSpace/category/WorkSpaceCategory';

const meta = {
  title: 'page/Modal/WorkSpaceCategory',
  component: WorkSpaceCategory,

  args: {
    onNext: () => {},
    onCategory: (category: string) => {
      category;
    },
  },
  argTypes: {},
} satisfies Meta<typeof WorkSpaceCategory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Category: Story = {
  args: {},
};
