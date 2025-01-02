import { IcFileDelete } from '@tiki/icon';
import { Flex, Spinner, Text } from '@tiki/ui';

import {
  borderStyle,
  textStyle,
} from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/File/AppendFile/File/BlockItem.style';

interface BlockItemProps {
  title: string;
  isUploading: boolean;
  onDelete: () => void;
}

const BlockItem = ({ title, isUploading, onDelete }: BlockItemProps) => {
  /* 추가해야 할 것 : 프로그래스바  ==> 서버로직 짤때 컴포넌트로 따로 빼서 적용할 것!*/

  return (
    <Flex
      styles={{ direction: 'row', align: 'center', justify: 'space-between', padding: '1.5rem 1.2rem', width: '100%' }}
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
