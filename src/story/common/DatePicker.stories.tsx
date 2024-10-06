import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import DatePicker from '@/common/component/DatePicker';
import { useOutsideClick } from '@/common/hook/useOutsideClick';
import { useOverlay } from '@/common/hook/useOverlay';

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

export const PrimaryDatePicker: Story = {
  render: () => {
    const { isOpen, close, toggle } = useOverlay();
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const ref = useOutsideClick<HTMLDivElement>(close);

    return (
      <div>
        <DatePicker ref={ref}>
          <DatePicker.Trigger selectedDate={selectedDate} onClick={toggle} width="10.3rem" />
          <DatePicker.Calender selectedDate={selectedDate} setSelectedDate={setSelectedDate} isOpen={isOpen} />
        </DatePicker>
      </div>
    );
  },
};
