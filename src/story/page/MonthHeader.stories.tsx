import MonthHeader from '@/page/Archiving/component/MonthHeader';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Page/MonthHeader',
  component: MonthHeader,
  parameters: {
    layout: 'centered',
  },
  args: {
    onMonthClick: (month: string) => {},
  },
  argTypes: {},
} satisfies Meta<typeof MonthHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
