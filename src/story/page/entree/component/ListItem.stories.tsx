import type { Meta, StoryObj } from '@storybook/react';

import ListItem from '@/page/entree/component/ListItem/ListItem';

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
    tags: [
      { content: 'meeting', bgColor: '#FFE6E8' },
      { content: 'study', bgColor: '#F8E2CB' },
      { content: 'meeting', bgColor: '#FFE6E8' },
      { content: 'study', bgColor: '#F8E2CB' },
      { content: 'meeting', bgColor: '#FFE6E8' },
      { content: 'study', bgColor: '#F8E2CB' },
    ],
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  argTypes: {},
};
