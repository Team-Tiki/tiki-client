import { containerStyle } from '@/common/component/DatePicker/Calendar/Calendar.style';
import CalendarDates from '@/common/component/DatePicker/Calendar/Dates/CalendarDates';
import CalendarDays from '@/common/component/DatePicker/Calendar/Days/CalendarDays';
import CalendarHeader from '@/common/component/DatePicker/Calendar/Header/CalendarHeader';
import useCalendar from '@/common/hook/useCalendar';

interface DatePickerCalendarProps {
  selectedDate: Date;
  endDate: Date | null;
  setSelectedDate: (date: Date) => void;
  variant: 'single' | 'range';
}

const DatePickerCalendar = ({ selectedDate, endDate, setSelectedDate, variant }: DatePickerCalendarProps) => {
  const { currentMonth, currentMonthAllDates, weekDays, toNextMonth, toPrevMonth } = useCalendar(selectedDate);

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
