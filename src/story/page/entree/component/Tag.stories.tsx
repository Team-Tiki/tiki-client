import type { Meta, StoryObj } from '@storybook/react';

import Tag from '@/page/entree/component/Tag/Tag';

const meta = {
  title: 'page/entree/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: { type: 'text' },
      options: ['study', 'notice', 'event', 'recruiting', 'meeting'],
    },
    color: {
      control: { type: 'radio' },
      options: ['#FFE6E8', '#F8E2CB', '#C4F2E5', '#DCD8FA', '#E2E8F8', '#F8E1F5', '#D3EFFA'],
    },
  },
  args: {
    content: 'content',
    color: 'color',
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { content: 'content', color: '#FFE6E8' },
  argTypes: {
    content: {
      control: { type: 'radio' },
    },
    color: {
      control: { type: 'radio' },
    },
  },
};
