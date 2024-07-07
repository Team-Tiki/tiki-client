import { timeBlockStyle } from './TimeBlock.style';

interface TimeBlockProps {
  children: React.ReactNode;
}

const TimeBlock = ({ children }: TimeBlockProps) => {
  return <article css={timeBlockStyle}>{children}</article>;
};

export default TimeBlock;
