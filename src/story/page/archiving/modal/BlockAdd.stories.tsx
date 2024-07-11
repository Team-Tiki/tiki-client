import BlockAdd from '@/page/archiving/component/Modal/Upload/File/Add/BlockAdd';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'page/Modal/Block',
  component: BlockAdd,

  args: {
    files: [],
    onFilesChange: (files: File[]) => {
      console.log('Files changed:', files);
    },
  },
  argTypes: {},
} satisfies Meta<typeof BlockAdd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Add: Story = {};
