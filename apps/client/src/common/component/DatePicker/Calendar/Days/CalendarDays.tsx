import { datesContainerStyle } from '@/common/component/DatePicker/Calendar/Calendar.style';
import Text from '@/common/component/Text/Text';

interface CalendarDaysProps {
  weekDays: string[];
}

const CalendarDays = ({ weekDays }: CalendarDaysProps) => (
  <div css={datesContainerStyle}>
    {weekDays.map((day, index) => (
      <Text tag="body8" role="button" key={index} css={{ fontWeight: 500 }} tabIndex={0}>
        {day}
      </Text>
    ))}
  </div>
);

export default CalendarDays;
