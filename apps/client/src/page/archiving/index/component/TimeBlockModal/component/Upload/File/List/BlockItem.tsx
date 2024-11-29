import { IcFileDelete } from '@tiki/icon';
import { Flex, Spinner, Text } from '@tiki/ui';

import {
  borderStyle,
  textStyle,
} from '@/page/archiving/index/component/TimeBlockModal/component/Upload/File/List/BlockItem.style';

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
        <IcFileDelete width={20} height={20} css={{ cursor: 'pointer' }} onClick={onDelete} />
      )}
    </Flex>
  );
};

export default BlockItem;
