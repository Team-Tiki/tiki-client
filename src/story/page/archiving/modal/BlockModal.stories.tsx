import BlockModal from '@/page/archiving/component/Modal/BlockModal';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'page/Modal/Block',
  component: BlockModal,

  args: {
    onNext: () => {},
  },
  argTypes: {},
} satisfies Meta<typeof BlockModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {};
