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
  render: () => <DatePicker variant="single" triggerWidth="10.3rem" />, // 단일 날짜 선택
};

export const RangeDatePicker: Story = {
  render: () => <DatePicker variant="range" triggerWidth="10.3rem" />, // 기간 선택
};
