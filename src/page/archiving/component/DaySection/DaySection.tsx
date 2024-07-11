import { bodyStyle, dayHeaderStyle, dayStyle } from '@/page/archiving/component/DaySection/DaySection.style';

import Flex from '@/common/component/Flex/Flex';

interface DaySectionProps {
  day: number;
  isEven: boolean;
}

const DaySection = ({ day, isEven }: DaySectionProps) => {
  return (
    <Flex css={dayStyle(isEven)}>
      <Flex css={dayHeaderStyle}>{day}</Flex>
      <Flex css={bodyStyle(isEven)} />
    </Flex>
  );
};

export default DaySection;
