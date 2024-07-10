import { borderStyle, textStyle } from '@/page/archiving/component/Modal/File/List/BlockItem.style';

import Delete from '@/common/asset/svg/file-delete.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

interface BlockItemProps {
  title: string;
}

const BlockItem = ({ title }: BlockItemProps) => {
  return (
    <Flex
      styles={{ direction: 'row', align: 'center', justify: 'space-between', padding: '1.5rem 1.2rem' }}
      css={borderStyle}>
      <Text tag="body6" css={textStyle}>
        {title}
      </Text>
      <Delete width={20} height={20} css={{ cursor: 'pointer' }} />
    </Flex>
  );
};

export default BlockItem;
