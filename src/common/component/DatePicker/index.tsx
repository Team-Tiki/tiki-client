import DatePickerCalendar from '@/common/component/DatePicker/Calendar/DatePickerCalendar';
import DatePickerTrigger from '@/common/component/DatePicker/Trigger/DatePickerTrigger';
import { containerStyle } from '@/common/component/DatePicker/index.style';
import { useDatePicker } from '@/common/hook/useDatePicker';
import { useOutsideClick } from '@/common/hook/useOutsideClick';
import { useOverlay } from '@/common/hook/useOverlay';

interface DatePickerProps {
  variant: 'single' | 'range';
  triggerWidth?: string;
}

const DatePicker = ({ variant, triggerWidth = '10.3rem' }: DatePickerProps) => {
  const { isOpen, close, toggle } = useOverlay();
  const ref = useOutsideClick<HTMLDivElement>(close);
  const { selectedDate, endDate, handleSelectDate, clearDates } = useDatePicker(variant);

  const handleInputClick = () => {
    // 캘린더가 닫혀 있고, 시작날짜와 종료날짜가 모두 선택된 경우에만 날짜 초기화
    if (!isOpen && selectedDate && endDate) {
      clearDates();
    }
    toggle();
  };

  return (
    <div ref={ref} css={containerStyle}>
      <DatePickerTrigger
        selectedDate={selectedDate}
        endDate={endDate}
        onClick={handleInputClick}
        variant={variant}
        width={triggerWidth}
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
