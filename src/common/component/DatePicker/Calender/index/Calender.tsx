import { containerStyle } from '@/common/component/DatePicker/Calender/index/Calender.style';
import useCalender from '@/common/hook/useCalender';

import CalendarDates from '../component/Dates/CalendarDates';
import CalendarDays from '../component/Days/CalendarDays';
import CalendarHeader from '../component/Header/CalendarHeader';

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
