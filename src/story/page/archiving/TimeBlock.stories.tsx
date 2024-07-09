import TimeBlock from '@/page/archiving/component/TimeBlock/TimeBlock';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Page/Archiving/TimeBlock',
  component: TimeBlock,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: ['타임 블록'],
    width: 10,
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    width: {
      control: {
        type: 'number',
      },
    },
  },
} satisfies Meta<typeof TimeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
