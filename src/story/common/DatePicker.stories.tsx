import { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

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
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const handleDateChange = (start: Date | null, end: Date | null) => {
      setSelectedDate(start);
      setEndDate(end);
    };

    return (
      <>
        <DatePicker
          variant="single"
          triggerWidth="10.3rem"
          onChange={handleDateChange}
          defaultSelectedDate={new Date('2024-05-12')}
        />
      </>
    );
  },
};

export const RangeDatePicker: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const handleDateChange = (start: Date | null, end: Date | null) => {
      setSelectedDate(start);
      setEndDate(end);
    };

    return (
      <>
        <DatePicker
          variant="range"
          triggerWidth="10.3rem"
          onChange={handleDateChange}
          defaultSelectedDate={new Date('2024-05-12')}
          defaultEndDate={new Date('2024-05-17')}
        />
      </>
    );
  },
};
