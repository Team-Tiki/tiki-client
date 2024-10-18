import { containerStyle } from '@/common/component/DatePicker/Calendar/Calendar.style';
import CalendarDates from '@/common/component/DatePicker/Calendar/Dates/CalendarDates';
import CalendarDays from '@/common/component/DatePicker/Calendar/Days/CalendarDays';
import CalendarHeader from '@/common/component/DatePicker/Calendar/Header/CalendarHeader';
import useCalender from '@/common/hook/useCalendar';

interface CalenderProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

const Calendar = ({ selectedDate, setSelectedDate }: CalenderProps) => {
  const { currentMonth, currentMonthAllDates, weekDays, toNextMonth, toPrevMonth } = useCalender(selectedDate);

  return (
    <div css={containerStyle}>
      <CalendarHeader currentMonth={currentMonth} onClickPrev={toPrevMonth} onClickNext={toNextMonth} />
      <CalendarDays weekDays={weekDays} />
      <CalendarDates
        currentMonth={currentMonth}
        currentMonthAllDates={currentMonthAllDates}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  );
};

export default Calendar;
