import DatePickerCalendar from "@/DatePicker/Calendar/DatePickerCalendar";
import { containerStyle } from "@/DatePicker/index.style";
import DatePickerTrigger from "@/DatePicker/Trigger/DatePickerTrigger";
import { useDatePicker, useOutsideClick, useOverlay } from "@tiki/utils";

interface DatePickerProps {
  variant: "single" | "range";
  triggerWidth?: string;
  onChange: (selectedDate: Date | null, endDate?: Date | null) => void;
  defaultSelectedDate?: Date;
  defaultEndDate?: Date;
}

const DatePicker = ({
  variant,
  triggerWidth = "10.3rem",
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
    initialEndDate,
  );

  const handleInputClick = () => {
    if (!isOpen && selectedDate && endDate) {
      clearDates();
    }
    toggle();
  };
  return (
    <div ref={ref} css={containerStyle(triggerWidth)}>
      <DatePickerTrigger
        selectedDate={selectedDate || initialSelectedDate}
        endDate={endDate || initialEndDate}
        onClick={handleInputClick}
        variant={variant}
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
