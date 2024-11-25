import type { Meta, StoryObj } from '@storybook/react';

import Divider from '@/common/component/Divider/Divider';

const meta = {
  title: 'Common/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: { type: 'number' },
    },
    color: {
      control: { type: 'color' },
    },
  },
  args: {
    type: 'horizontal',
    size: 50,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '70rem', height: '5rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    type: 'horizontal',
    size: 100,
  },
};

export const Vertical: Story = {
  args: {
    type: 'vertical',
    size: 100,
  },
};
