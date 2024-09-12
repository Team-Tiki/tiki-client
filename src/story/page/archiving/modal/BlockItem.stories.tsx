import type { Meta, StoryObj } from '@storybook/react';

import BlockItem from '@/page/archiving/createTimeBlock/component/Upload/File/List/BlockItem';

const meta = {
  title: 'page/Modal/Block',
  component: BlockItem,

  args: {
    title: '6월 회의록(1).word',
    onDelete: () => {
      console.log('Delete clicked');
    },
    isUploading: false,
  },
  argTypes: {},
} satisfies Meta<typeof BlockItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ItemFile: Story = {
  args: {
    title: '6월 회의록(1).word',
    onDelete: () => {
      console.log('Delete clicked');
    },
    isUploading: false,
  },
};
