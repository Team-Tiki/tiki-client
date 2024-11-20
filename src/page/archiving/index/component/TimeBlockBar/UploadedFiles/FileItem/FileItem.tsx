import CloseButton from '@/common/asset/svg/ic_close.svg?react';
import IcPDF from '@/common/asset/svg/ic_pdf_file.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

import {
  circleStyle,
  closeBtnStyle,
  containerStyle,
  fileCapacityStyle,
  fileTitleStyle,
} from '@/page/archiving/index/component/TimeBlockBar/UploadedFiles/FileItem/FileItem.style';

interface FileItemProps {
  title: string;
  capacity: string;
  isEditable: boolean;
}

const FileItem = ({ title, capacity, isEditable }: FileItemProps) => {
  return (
    <li css={containerStyle}>
      <Flex>
        <Flex css={circleStyle}>
          <IcPDF width={16} height={16} />
        </Flex>
        <Flex styles={{ direction: 'column', gap: '0.6rem' }}>
          <Text tag="body8" css={fileTitleStyle}>
            {title}
          </Text>
          <Text tag="body8" css={fileCapacityStyle}>
            {capacity}
          </Text>
        </Flex>
      </Flex>

      {isEditable && <CloseButton width={16} height={16} css={closeBtnStyle} />}
    </li>
  );
};

export default FileItem;
