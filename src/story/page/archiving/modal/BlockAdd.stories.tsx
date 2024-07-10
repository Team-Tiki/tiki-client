import BlockAdd from '@/page/archiving/component/Modal/File/Add/BlockAdd';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'page/Modal/Block',
  component: BlockAdd,

  args: {},
  argTypes: {},
} satisfies Meta<typeof BlockAdd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Add: Story = {};
