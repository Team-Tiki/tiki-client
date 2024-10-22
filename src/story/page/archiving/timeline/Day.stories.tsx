import type { Meta, StoryObj } from '@storybook/react';

import Day from '@/page/archiving/index/component/TimeLine/Day/Day';

const meta = {
  title: 'Page/Archiving/DaySection',
  component: Day,
  parameters: {
    layout: 'centered',
  },
  args: {
    endDay: new Date(),
  },
  argTypes: {
    endDay: {
      control: {
        type: 'date',
      },
    },
  },
} satisfies Meta<typeof Day>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentYear: new Date(2024, 0, 2).getFullYear(),
    currentMonth: new Date(2024, 0, 2).getMonth() + 1,
    endDay: new Date(2024, 0, 31),
  },
};
