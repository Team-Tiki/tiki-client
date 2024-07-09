import { bodyStyle, dayBtnStyle, dayStyle } from './DaySection.style';

interface DaySectionProps {
  day: number;
  isClicked: boolean;
}

const DaySection = ({ day, isClicked }: DaySectionProps) => {
  return (
    <article css={dayStyle}>
      <button css={dayBtnStyle(isClicked)}>{day}</button>
      <div css={bodyStyle} />
    </article>
  );
};

export default DaySection;
