import { containerStyle } from '@/common/component/DatePicker/Calendar/Calendar.style';
import useCalendar from '@/common/hook/useCalendar';

import CalendarDates from './Dates/CalendarDates';
import CalendarDays from './Days/CalendarDays';
import CalendarHeader from './Header/CalendarHeader';

interface DatePickerCalendarProps {
  selectedDate: Date;
  endDate: Date | null;
  setSelectedDate: (date: Date) => void;
  variant: 'single' | 'range';
  isOpen: boolean;
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
