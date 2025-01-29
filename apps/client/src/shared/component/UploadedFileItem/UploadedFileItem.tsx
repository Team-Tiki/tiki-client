import { IcCheckGreen, IcClose, IcFileItem } from '@tiki/icon';
import { Flex, Spinner, Text } from '@tiki/ui';

import { borderStyle, textStyle } from '@/shared/component/UploadedFileItem/UploadedFileItem.style';

interface BlockItemProps {
  title: string;
  isUploading?: boolean;
  fileSize: string;
  uploadedSize: string;
  onDelete: () => void;
  size?: 'medium' | 'large';
}

const UploadedFileItem = ({
  title,
  isUploading = false,
  fileSize,
  uploadedSize,
  onDelete,
  size = 'large',
}: BlockItemProps) => {
  /* 추가해야 할 것 : 프로그래스바  ==> 서버로직 짤때 컴포넌트로 따로 빼서 적용할 것!*/

  return (
    <Flex
      styles={{
        direction: 'row',
        align: 'center',
        justify: 'space-between',
        padding: size === 'large' ? '0rem 1.2rem' : '',
      }}
      css={borderStyle(size)}>
      <Flex styles={{ justify: 'center', align: 'center' }}>
        <IcFileItem width={20} height={20} css={{ margin: '1.2rem', flexShrink: '0' }} />
        <Flex styles={{ direction: 'column', gap: '0.6rem' }}>
          <Text tag="body8" css={textStyle(size)}>
            {title}
          </Text>
          <Text tag="body8" css={textStyle(size)}>
            {fileSize} 중 {uploadedSize}
          </Text>
        </Flex>
      </Flex>
      <Flex styles={{ justify: 'center', align: 'center', gap: '1.2rem' }}>
        {isUploading ? <Spinner size={20} /> : <IcCheckGreen width={12} height={12} />}
        <IcClose width={16} height={16} css={{ margin: '1.2rem', cursor: 'pointer' }} onClick={onDelete} />
      </Flex>
    </Flex>
  );
};

export default UploadedFileItem;
