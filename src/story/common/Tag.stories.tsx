import type { Meta, StoryObj } from '@storybook/react';

import Tag from '@/common/component/Tag/Tag';

const meta = {
  title: 'Common/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['round', 'square'],
    },
    children: {
      control: { type: 'text' },
    },
    color: {
      control: { type: 'color' },
    },
    bgColor: {
      control: { type: 'color' },
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Round: Story = {
  args: {
    variant: 'round',
    children: 'meeting',
  },
};

export const Square: Story = {
  args: {
    variant: 'square',
    children: '작성 완료',
  },
};
