import BlockModal from '@/page/archiving/createTimeBlock/component/Block/BlockModal';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BlockModal> = {
  title: 'page/Modal/Block',
  component: BlockModal,
  args: {
    onNext: () => {},
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {};
