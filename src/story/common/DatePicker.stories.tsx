import { Meta, StoryObj } from '@storybook/react';

import DatePicker from '@/common/component/DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Common/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleDatePicker: Story = {
  render: () => <DatePicker variant="single" triggerWidth="10.3rem" />,
};

export const RangeDatePicker: Story = {
  render: () => <DatePicker variant="range" triggerWidth="10.3rem" />,
};
