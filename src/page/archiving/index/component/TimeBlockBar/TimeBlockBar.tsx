import CloseButton from '@/common/asset/svg/ic_close.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';

import { containerStyle } from '@/page/archiving/index/component/TimeBlockBar/TimeBlockBar.style';
import { BLOCK_ICON } from '@/page/archiving/index/constant/icon';
import { formattingDate } from '@/page/archiving/index/util/date';

interface TimeBlockBarProps {
  title: string;
  startDate: Date;
  endDate: Date;
  blockType: string;
  color: string;
}

const TimeBlockBar = ({
  title = 'OT 준비',
  startDate = new Date('2024.09.13'),
  endDate = new Date('2024.09.15'),
  blockType = 'MEETING',
  color = '#FFE6E8',
}: TimeBlockBarProps) => {
  return (
    <aside css={containerStyle}>
      <CloseButton />
      <Flex>
        {BLOCK_ICON.find((icon) => icon.name === blockType)?.icon(color)}
        <Button>수정하기</Button>
      </Flex>
      <Heading>{title}</Heading>
      <Text>
        {formattingDate(startDate)} ~ {formattingDate(endDate)}
      </Text>
    </aside>
  );
};

export default TimeBlockBar;
