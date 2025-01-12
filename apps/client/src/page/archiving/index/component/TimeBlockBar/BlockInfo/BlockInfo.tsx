import { DatePicker, Flex, Heading, Input, Text } from '@tiki/ui';

import { periodStyle, titleInputStyle } from '@/page/archiving/index/component/TimeBlockBar/BlockInfo/BlockInfo.style';

interface BlockInfoProps {
  title: string;
  startDate: string;
  endDate: string;
  isEditable: boolean;
}

const BlockInfo = ({ title, startDate, endDate, isEditable }: BlockInfoProps) => {
  const handleDateChange = () => {
    // 날짜 선택 코드 추후 작성 필요
  };

  return (
    <Flex styles={{ direction: 'column', gap: '1rem', marginTop: '1.8rem', width: '100%' }}>
      {isEditable ? <Input css={titleInputStyle} value={title} /> : <Heading tag="H6">{title}</Heading>}

      {isEditable ? (
        <DatePicker onChange={handleDateChange} variant="range" triggerWidth="100%" />
      ) : (
        <Text tag="body6" css={periodStyle}>
          {startDate} ~ {endDate}
        </Text>
      )}
    </Flex>
  );
};

export default BlockInfo;
