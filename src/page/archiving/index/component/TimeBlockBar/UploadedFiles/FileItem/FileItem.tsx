import IcPDF from '@/common/asset/svg/ic_pdf_file.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Text from '@/common/component/Text/Text';

import {
  circleStyle,
  containerStyle,
  fileCapacityStyle,
  fileTitleStyle,
} from '@/page/archiving/index/component/TimeBlockBar/UploadedFiles/FileItem/FileItem.style';

interface FileItemProps {
  title: string;
  capacity: string;
}

const FileItem = ({ title, capacity }: FileItemProps) => {
  return (
    <Flex tag="li" css={containerStyle}>
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
  );
};

export default FileItem;
