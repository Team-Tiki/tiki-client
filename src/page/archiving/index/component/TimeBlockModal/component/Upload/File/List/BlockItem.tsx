import Delete from '@/common/asset/svg/ic_file_delete.svg?react';
import File from '@/common/asset/svg/ic_file_preview.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

import { textStyle } from '@/page/archiving/index/component/TimeBlockModal/component/Block/BlockModal.style';
import '@/page/archiving/index/component/TimeBlockModal/component/Upload/File/List/BlockItem.style';

interface BlockItemProps {
  title: string;
  fileSize: string;
  uploadedSize: string;
  onDelete: () => void;
  isUploading: boolean;
}

const BlockItem = ({ title, fileSize, uploadedSize, onDelete }: BlockItemProps) => {
  /* 추가해야 할 것 : 프로그래스바  ==> 서버로직 짤때 컴포넌트로 따로 빼서 적용할 것!*/

  return (
    <Flex
      styles={{
        direction: 'row',
        align: 'center',
        justify: 'space-between',
        padding: '0.7rem 0rem',
        width: '100%',
      }}>
      <Flex
        styles={{
          direction: 'row',
          align: 'center',
        }}>
        <File width={44} height={44} />
        <Flex styles={{ direction: 'column', align: 'flex-start', gap: '0.6rem' }}>
          <Text tag="body8">{title}</Text>
          <Text tag="body8" css={textStyle}>
            {fileSize} 중 {uploadedSize}
          </Text>
        </Flex>
      </Flex>

      <Delete width={40} height={40} css={{ cursor: 'pointer' }} onClick={onDelete} />
    </Flex>
  );
};

export default BlockItem;
