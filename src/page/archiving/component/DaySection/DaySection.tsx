import { bodyStyle, dayBtnStyle, dayStyle } from './DaySection.style';

interface DaySectionProps {
  day: number;
  isClicked: boolean;
  isEven: boolean;
}

const DaySection = ({ day, isClicked, isEven }: DaySectionProps) => {
  return (
    <article css={dayStyle(isEven)}>
      <button css={dayBtnStyle(isClicked)}>{day}</button>
      <div css={bodyStyle} />
    </article>
  );
};

export default DaySection;
