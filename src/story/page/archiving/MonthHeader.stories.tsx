import MonthHeader from '@/page/archiving/component/MonthHeader';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Page/Archiving/MonthHeader',
  component: MonthHeader,
  parameters: {
    layout: 'centered',
  },
  args: {
    onMonthClick: () => {},
  },
  argTypes: {},
} satisfies Meta<typeof MonthHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
