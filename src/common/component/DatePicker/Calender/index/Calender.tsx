import CalendarDates from '@/common/component/DatePicker/Calender/component/Dates/CalendarDates';
import CalendarDays from '@/common/component/DatePicker/Calender/component/Days/CalendarDays';
import CalendarHeader from '@/common/component/DatePicker/Calender/component/Header/CalendarHeader';
import { containerStyle } from '@/common/component/DatePicker/Calender/index/Calender.style';
import useCalender from '@/common/hook/useCalender';

interface CalenderProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

const Calender = ({ selectedDate, setSelectedDate }: CalenderProps) => {
  const { currentMonth, currentMonthAllDates, weekDays, nextMonth, prevMonth } = useCalender(selectedDate);

  return (
    <div css={containerStyle}>
      <CalendarHeader currentMonth={currentMonth} prevMonth={prevMonth} nextMonth={nextMonth} />
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

export default Calender;
