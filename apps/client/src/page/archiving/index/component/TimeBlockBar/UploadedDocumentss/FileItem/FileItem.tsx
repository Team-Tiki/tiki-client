import { IcClose } from '@tiki/icon';
import { Flex, Text } from '@tiki/ui';

import {
  circleStyle,
  closeBtnStyle,
  containerStyle,
  fileCapacityStyle,
  fileTitleStyle,
} from '@/page/archiving/index/component/TimeBlockBar/UploadedDocumentss/FileItem/FileItem.style';
import { selectFileIc } from '@/page/archiving/index/util/selectFileIc';

interface FileItemProps {
  title: string;
  capacity: string;
  isEditable: boolean;
}

const FileItem = ({ title, capacity, isEditable }: FileItemProps) => {
  const fileType = title.split('.')[title.split('.').length - 1];

  return (
    <li css={containerStyle}>
      <Flex styles={{ gap: '1.2rem' }}>
        <Flex css={circleStyle}>{selectFileIc(fileType)}</Flex>
        <Flex styles={{ direction: 'column', gap: '0.6rem' }}>
          <Text tag="body8" css={fileTitleStyle}>
            {title}
          </Text>
          <Text tag="body8" css={fileCapacityStyle}>
            {capacity}
          </Text>
        </Flex>
      </Flex>

      {isEditable && <IcClose width={16} height={16} css={closeBtnStyle} />}
    </li>
  );
};

export default FileItem;
