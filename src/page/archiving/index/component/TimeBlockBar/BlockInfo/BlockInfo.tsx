import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';

import { periodStyle } from '@/page/archiving/index/component/TimeBlockBar/BlockInfo/BlockInfo.style';
import { formattingDate } from '@/page/archiving/index/util/date';

interface BlockInfoProps {
  title: string;
  startDate: Date;
  endDate: Date;
}

const BlockInfo = ({ title, startDate, endDate }: BlockInfoProps) => {
  return (
    <Flex styles={{ direction: 'column', gap: '1rem' }}>
      <Heading tag="H6" style={{ marginTop: '1.8rem' }}>
        {title}
      </Heading>
      <Text tag="body6" css={periodStyle}>
        {formattingDate(startDate)} ~ {formattingDate(endDate)}
      </Text>
    </Flex>
  );
};

export default BlockInfo;
