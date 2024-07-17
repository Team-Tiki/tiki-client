import TimeBlock from '@/page/archiving/index/component/TimeBlock/TimeBlock';
import { Meta, StoryObj } from '@storybook/react';

import { theme } from '@/common/style/theme/theme';

const meta = {
  title: 'Page/Archiving/TimeBlock',
  component: TimeBlock,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: ['타임 블록'],
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof TimeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '타임 블록',
    startDate: new Date(2022, 0, 1),
    endDate: new Date(2022, 0, 2),
    color: theme.colors.blue,
    floor: 0,
    onBlockClick: () => {},
  },
};
