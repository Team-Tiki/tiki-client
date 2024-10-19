import { isBefore } from 'date-fns';

import { useState } from 'react';

import { useOutsideClick } from '@/common/hook/useOutsideClick';
import { useOverlay } from '@/common/hook/useOverlay';

import DatePickerCalendar from './Calendar/DatePickerCalendar';
import DatePickerTrigger from './Trigger/DatePickerTrigger';

interface DatePickerProps {
  variant: 'single' | 'range';
}

const DatePicker = ({ variant }: DatePickerProps) => {
  const { isOpen, close, toggle } = useOverlay();
  const ref = useOutsideClick<HTMLDivElement>(close);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleSelectDate = (date: Date) => {
    if (variant === 'range') {
      // 두 날짜가 선택되었을 때, 자동으로 순서를 조정 (시작 날짜가 종료 날짜보다 늦으면 교환)
      if (!selectedDate || (selectedDate && endDate)) {
        setSelectedDate(date);
        setEndDate(null);
      } else {
        if (isBefore(date, selectedDate)) {
          setEndDate(selectedDate);
          setSelectedDate(date);
        } else {
          setEndDate(date);
        }
      }
    } else {
      setSelectedDate(date); // 단일 날짜 설정
    }
  };

  return (
    <div ref={ref} style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      <DatePickerTrigger
        selectedDate={selectedDate}
        endDate={endDate}
        onClick={toggle}
        variant={variant}
        width="10.3rem"
      />

      {isOpen && (
        <DatePickerCalendar
          selectedDate={selectedDate || new Date()}
          endDate={endDate}
          setSelectedDate={handleSelectDate}
          variant={variant}
          isOpen={isOpen}
        />
      )}
    </div>
  );
};

export default DatePicker;
