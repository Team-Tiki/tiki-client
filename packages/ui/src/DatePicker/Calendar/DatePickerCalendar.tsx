import { containerStyle } from "@/DatePicker/Calendar/Calendar.style";
import CalendarDates from "@/DatePicker/Calendar/Dates/CalendarDates";
import CalendarDays from "@/DatePicker/Calendar/Days/CalendarDays";
import CalendarHeader from "@/DatePicker/Calendar/Header/CalendarHeader";

import { useCalender } from "@tiki/utils";

interface DatePickerCalendarProps {
  selectedDate: Date;
  endDate: Date | null;
  setSelectedDate: (date: Date) => void;
  variant: "single" | "range";
}

const DatePickerCalendar = ({ selectedDate, endDate, setSelectedDate, variant }: DatePickerCalendarProps) => {
  const { currentMonth, currentMonthAllDates, weekDays, toNextMonth, toPrevMonth } = useCalender(selectedDate);

  return (
    <div css={containerStyle}>
      <CalendarHeader currentMonth={currentMonth} onClickPrev={toPrevMonth} onClickNext={toNextMonth} />
      <CalendarDays weekDays={weekDays} />
      <CalendarDates
        currentMonth={currentMonth}
        currentMonthAllDates={currentMonthAllDates}
        selectedDate={selectedDate}
        endDate={endDate}
        setSelectedDate={setSelectedDate}
        variant={variant}
      />
    </div>
  );
};

export default DatePickerCalendar;
