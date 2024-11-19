import DatePickerCalendar from '@/common/component/DatePicker/Calendar/DatePickerCalendar';
import DatePickerTrigger from '@/common/component/DatePicker/Trigger/DatePickerTrigger';
import { containerStyle } from '@/common/component/DatePicker/index.style';
import { useDatePicker } from '@/common/hook/useDatePicker';
import { useOutsideClick } from '@/common/hook/useOutsideClick';
import { useOverlay } from '@/common/hook/useOverlay';

interface DatePickerProps {
  variant: 'single' | 'range';
  triggerWidth?: string;
  onChange: (selectedDate: Date | null, endDate: Date | null) => void;
  defaultSelectedDate?: Date;
  defaultEndDate?: Date;
}

const DatePicker = ({
  variant,
  triggerWidth = '10.3rem',
  onChange,
  defaultSelectedDate,
  defaultEndDate,
}: DatePickerProps) => {
  const { isOpen, close, toggle } = useOverlay();
  const ref = useOutsideClick<HTMLDivElement>(close);

  const initialSelectedDate = defaultSelectedDate ? new Date(defaultSelectedDate) : null;
  const initialEndDate = defaultEndDate ? new Date(defaultEndDate) : null;

  const { selectedDate, endDate, handleSelectDate, clearDates } = useDatePicker(
    variant,
    onChange,
    initialSelectedDate,
    initialEndDate
  );

  const handleInputClick = () => {
    if (!isOpen && selectedDate && endDate) {
      clearDates();
    }
    toggle();
  };

  return (
    <div ref={ref} css={containerStyle}>
      <DatePickerTrigger
        selectedDate={selectedDate || initialSelectedDate}
        endDate={endDate || initialEndDate}
        onClick={handleInputClick}
        variant={variant}
        width={triggerWidth}
      />
      {isOpen && (
        <DatePickerCalendar
          selectedDate={selectedDate || initialSelectedDate || new Date()}
          endDate={endDate || initialEndDate}
          setSelectedDate={handleSelectDate}
          variant={variant}
        />
      )}
    </div>
  );
};

export default DatePicker;
