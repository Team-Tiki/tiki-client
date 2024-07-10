import BlockIcon from '@/page/archiving/component/Modal/Icon/BlockIcon';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'page/Modal/Block',
  component: BlockIcon,

  args: {
    onNext: () => {},
  },
  argTypes: {},
} satisfies Meta<typeof BlockIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {};
