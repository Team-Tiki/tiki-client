import BlockIcon from '@/page/archiving/component/Modal/Block/Icon/BlockIcon';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'page/Modal/BlockIcon',
  component: BlockIcon,
  args: {
    selectedIcon: null,
    setSelectedIcon: (index: number | ((prevIndex: number | null) => number | null) | null) => {},
  },
  argTypes: {
    selectedIcon: { control: 'number' },
    setSelectedIcon: { action: 'setSelectedIcon' },
  },
} satisfies Meta<typeof BlockIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {};
