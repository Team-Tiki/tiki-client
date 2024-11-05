import type { Meta, StoryObj } from '@storybook/react';

import ListItem from '@/page/dashboard/component/ListItem/ListItem';

const meta = {
  title: 'page/entree/ListItem',
  component: ListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    content: {
      control: { type: 'text' },
    },
    date: {
      control: false,
    },
    tags: {
      control: false,
    },
  },
  args: {
    title: '3차 정기 회의',
    content: '티키의 3번째 정기 회의록입니다. 티키의 3번째 정기 회의록입니다.',
    date: new Date(),
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tags: [
      { tagId: 0, content: 'meeting', bgColor: '#FFE6E8' },
      { tagId: 1, content: 'study', bgColor: '#F8E2CB' },
      { tagId: 2, content: 'meeting', bgColor: '#FFE6E8' },
      { tagId: 3, content: 'study', bgColor: '#F8E2CB' },
      { tagId: 4, content: 'meeting', bgColor: '#FFE6E8' },
      { tagId: 5, content: 'study', bgColor: '#F8E2CB' },
    ],
  },
  argTypes: {},
};

export const ZeroFile: Story = {
  args: {},
  argTypes: {},
};

export const SomeFile: Story = {
  args: {
    tags: [{ tagId: 0, content: 'meeting', bgColor: '#FFE6E8' }],
  },
  argTypes: {},
};
