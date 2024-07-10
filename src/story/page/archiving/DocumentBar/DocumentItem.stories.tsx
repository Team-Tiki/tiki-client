import DocumentItem from '@/page/archiving/component/DocumentBar/DocumentItem/DocumentItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Page/Archiving/DocumentBar/DocumentItem',
  component: DocumentItem,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: '6월 회의록(1).word',
    wholeDocument: false,
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof DocumentItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
