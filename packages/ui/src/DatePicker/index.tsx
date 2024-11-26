import DatePickerCalendar from "@/DatePicker/Calendar/DatePickerCalendar";
import DatePickerTrigger from "@/DatePicker/Trigger/DatePickerTrigger";
import { containerStyle } from "@/DatePicker/index.style";
import Label from "@/Label/Label";
import { useDatePicker, useOutsideClick, useOverlay } from "@tiki/utils";

interface DatePickerProps {
  label?: string;
  variant: "single" | "range";
  triggerWidth?: string;
}

const DatePicker = ({ label, variant, triggerWidth = "10.3rem" }: DatePickerProps) => {
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
    <div ref={ref} css={containerStyle(triggerWidth)}>
      {label && <Label id={label}>{label}</Label>}
      <DatePickerTrigger selectedDate={selectedDate} endDate={endDate} onClick={handleInputClick} variant={variant} />
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
