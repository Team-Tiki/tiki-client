import Delete from '@/common/asset/svg/file-delete.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Spinner from '@/common/component/Spinner/Spinner';
import Text from '@/common/component/Text/Text';

import { borderStyle, textStyle } from '@/page/archiving/createTimeBlock/component/Upload/File/List/BlockItem.style';

interface BlockItemProps {
  title: string;
  onDelete: () => void;
  isUploading: boolean;
}

const BlockItem = ({ title, onDelete, isUploading }: BlockItemProps) => {
  return (
    <Flex
      styles={{ direction: 'row', align: 'center', justify: 'space-between', padding: '1.5rem 1.2rem' }}
      css={borderStyle}>
      <Text tag="body6" css={textStyle}>
        {title}
      </Text>
      {isUploading ? (
        <Spinner size={20} />
      ) : (
        <Delete width={20} height={20} css={{ cursor: 'pointer' }} onClick={onDelete} />
      )}
    </Flex>
  );
};

export default BlockItem;
