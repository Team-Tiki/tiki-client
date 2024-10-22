import { Meta, StoryObj } from '@storybook/react';

import TimeBlock from '@/page/archiving/index/component/TimeLine/TimeBlock/TimeBlock';

const meta: Meta<typeof TimeBlock> = {
  title: 'Page/Archiving/TimeBlock',
  component: TimeBlock,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: '타임 블록',
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    color: {
      control: {
        type: 'color',
      },
    },
    blockType: {
      control: {
        type: 'radio',
      },
      options: ['MEETING', 'RECRUITING', 'NOTICE', 'STUDY', 'EVENT'],
    },
    startDate: {
      control: {
        type: 'date',
      },
    },
    endDate: {
      control: {
        type: 'date',
      },
    },
    floor: {
      control: {
        type: 'number',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '타임 블록',
    startDate: new Date(2022, 0, 1),
    endDate: new Date(2022, 0, 10),
    color: '#FFE6E8',
    floor: 1,
    blockType: 'MEETING',
    onBlockClick: () => {},
  },
};
