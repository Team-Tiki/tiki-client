/** @jsxImportSource @emotion/react */
import { bodyStyle, dayStyle } from './DaySection.style';

interface DaySectionProps {
  day: number;
  onDayClick: () => void;
}

const DaySection = ({ day, onDayClick }: DaySectionProps) => {
  return (
    <>
      <button css={dayStyle} onClick={() => onDayClick()}>
        {day}
      </button>
      <div css={bodyStyle} />
    </>
  );
};

export default DaySection;
