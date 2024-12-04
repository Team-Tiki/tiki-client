import { DatePicker, Flex, Heading, Input, Text } from '@tiki/ui';

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
