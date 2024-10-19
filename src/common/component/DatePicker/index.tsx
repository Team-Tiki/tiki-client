import { useDatePicker } from '@/common/hook/useDatePicker';
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
  const { selectedDate, endDate, handleSelectDate } = useDatePicker(variant);

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
        />
      )}
    </div>
  );
};

export default DatePicker;
