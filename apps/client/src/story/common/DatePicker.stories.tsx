import { Meta } from '@storybook/react';
import { DatePicker } from '@tiki/ui';

import { useState } from 'react';

const meta: Meta<typeof DatePicker> = {
  title: 'Common/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const SingleDatePicker = {
  render: () => {
    const [, setSelectedDate] = useState<Date | null>(null);
    const [, setEndDate] = useState<Date | null>(null);

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

export const RangeDatePicker = {
  render: () => {
    const [, setSelectedDate] = useState<Date | null>(null);
    const [, setEndDate] = useState<Date | null>(null);

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
