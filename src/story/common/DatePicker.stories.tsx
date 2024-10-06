import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import DatePicker from '@/common/component/DatePicker/DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Common/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    selectedDate: null, // 기본적으로 선택된 날짜가 null로 시작
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryDatePicker: Story = {
  render: (args) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(args.selectedDate); // selectedDate가 null일 수 있도록 수정

    return (
      <div>
        <DatePicker
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate} // setSelectedDate를 내부에서 관리
        />
      </div>
    );
  },
};
