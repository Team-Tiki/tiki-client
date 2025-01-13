import type { Meta, StoryObj } from '@storybook/react';

import NoteItem from '@/page/handover/component/NoteItem/NoteItem';

const meta = {
  title: 'Page/Handover/NoteItem',
  component: NoteItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    startDate: '2024-11-15',
    endDate: '2024-11-17',
    title: '티키 나스닥 상장 리포트',
    author: '짱건',
    complete: false,
    canSelect: false,
    isSelected: false,
    onSelect: () => {},
  },
  argTypes: {
    complete: {
      control: { type: 'boolean' },
    },
    isSelected: { control: { type: 'boolean' } },
  },
} satisfies Meta<typeof NoteItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => {},
  },
};
