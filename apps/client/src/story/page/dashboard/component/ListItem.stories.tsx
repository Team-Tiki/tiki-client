import type { Meta, StoryObj } from '@storybook/react';

import ListItem from '@/page/dashboard/component/Handover/ListItem/ListItem';

const meta = {
  title: 'Page/Entry/ListItem',
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
    date: '2024-12-30',
  },
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    noteId: 1,
  },
  argTypes: {},
};
