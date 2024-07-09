import { bodyStyle, dayBtnStyle, dayStyle } from '@/page/archiving/component/DaySection/DaySection.style';

interface DaySectionProps {
  day: number;
  isClicked: boolean;
  isEven: boolean;
  onDayClick: () => void;
}

const DaySection = ({ day, isClicked, isEven, onDayClick }: DaySectionProps) => {
  return (
    <article css={dayStyle(isEven)}>
      <button css={dayBtnStyle(isClicked)} onClick={onDayClick}>
        {day}
      </button>
      <div css={bodyStyle} />
    </article>
  );
};

export default DaySection;
