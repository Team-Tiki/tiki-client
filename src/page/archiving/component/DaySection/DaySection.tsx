import { bodyStyle, dayStyle } from './DaySection.style';

interface DaySectionProps {
  day: number;
  isClicked: boolean;
}

const DaySection = ({ day, isClicked }: DaySectionProps) => {
  return (
    <>
      <button css={dayStyle(isClicked)}>{day}</button>
      <div css={bodyStyle} />
    </>
  );
};

export default DaySection;
