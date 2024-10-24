import type { Meta, StoryObj } from '@storybook/react';

import MonthHeader from '@/page/archiving/index/component/MonthHeader/MonthHeader';

const meta = {
  title: 'Page/Archiving/MonthHeader',
  component: MonthHeader,
  parameters: {
    layout: 'centered',
  },
  args: {
    currentMonth: '7월',
    onMonthClick: () => {},
  },
  argTypes: {},
} satisfies Meta<typeof MonthHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
