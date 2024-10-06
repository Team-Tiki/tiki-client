import { format } from 'date-fns';

import Input from '@/common/component/Input/Input';
import { useOutsideClick, useOverlay } from '@/common/hook';

import Calender from './Calender/Calender';
import DatePickerWrapper from './DatePickerContainer/DatePickerContainer';

export interface DatePickerProps {
  selectedDate: Date | null;
  setSelectedDate: (date: Date) => void;
}

export default function DatePicker({ selectedDate, setSelectedDate }: DatePickerProps) {
  const { isOpen, toggle, close } = useOverlay();
  const ref = useOutsideClick<HTMLDivElement>(close);

  return (
    <div ref={ref}>
      <Input
        variant="default"
        size="medium"
        value={selectedDate ? format(selectedDate, 'yyyy.MM.dd') : ''}
        placeholder="YYYY.MM.DD"
        readOnly
        onClick={toggle}
        aria-label="Date Picker"
        css={{ cursor: 'pointer' }}
      />
      {isOpen && (
        <DatePickerWrapper>
          <Calender selectedDate={selectedDate || new Date()} setSelectedDate={setSelectedDate} />{' '}
        </DatePickerWrapper>
      )}
    </div>
  );
}
