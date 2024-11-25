import DatePicker from '@/common/component/DatePicker';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Input from '@/common/component/Input/Input';
import Text from '@/common/component/Text/Text';

import { periodStyle, titleInputStyle } from '@/page/archiving/index/component/TimeBlockBar/BlockInfo/BlockInfo.style';
import { formattingDate } from '@/page/archiving/index/util/date';

interface BlockInfoProps {
  title: string;
  startDate: Date;
  endDate: Date;
  isEditable: boolean;
}

const BlockInfo = ({ title, startDate, endDate, isEditable }: BlockInfoProps) => {
  return (
    <Flex styles={{ direction: 'column', gap: '1rem', marginTop: '1.8rem', width: '100%' }}>
      {isEditable ? <Input css={titleInputStyle} value={title} /> : <Heading tag="H6">{title}</Heading>}

      {isEditable ? (
        <DatePicker variant="range" triggerWidth="100%" />
      ) : (
        <Text tag="body6" css={periodStyle}>
          {formattingDate(startDate)} ~ {formattingDate(endDate)}
        </Text>
      )}
    </Flex>
  );
};

export default BlockInfo;
