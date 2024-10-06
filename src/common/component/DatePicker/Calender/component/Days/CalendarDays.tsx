import { datesContainerStyle, dayStyle } from '@/common/component/DatePicker/Calender/index/Calendar.style';
import Text from '@/common/component/Text/Text';

interface CalendarDaysProps {
  weekDays: string[];
}

const CalendarDays = ({ weekDays }: CalendarDaysProps) => (
  <div css={datesContainerStyle}>
    {weekDays.map((day, index) => (
      <Text tag="body8" key={index} css={dayStyle}>
        {day}
      </Text>
    ))}
  </div>
);

export default CalendarDays;
