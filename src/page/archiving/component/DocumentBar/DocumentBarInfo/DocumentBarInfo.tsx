import Laptop from '@/common/asset/svg/Laptop.svg?react';
import Button from '@/common/component/Button/Button';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Text from '@/common/component/Text/Text';
import { theme } from '@/common/style/theme/theme';

import { containerStyle, deleteBtnStyle } from './DocumentBarInfo.style';

interface DocumentBarInfoProps {
  blockName: string;
  startDate: string;
  endDate: string;
}

const DocumentBarInfo = ({ blockName, startDate, endDate }: DocumentBarInfoProps) => {
  return (
    <section css={containerStyle}>
      <Laptop css={{ width: '2.4rem', height: '2.4rem' }} />
      <Flex styles={{ direction: 'row', justify: 'space-between', width: '24.8rem' }}>
        <Heading tag="H6" css={{ fontWeight: '500' }}>
          {blockName}
        </Heading>
        <Button variant="text" size="small" css={deleteBtnStyle}>
          블록삭제
        </Button>
      </Flex>
      <Text tag="body6" css={{ color: theme.colors.gray_800 }}>
        {startDate} ~ {endDate}
      </Text>
    </section>
  );
};

export default DocumentBarInfo;
