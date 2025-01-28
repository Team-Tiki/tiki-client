import { IcFileItem } from '@tiki/icon';
import { Text } from '@tiki/ui';

import { fileItemWrapperStyle } from '@/shared/component/TimeBlockModal/component/SelectedFileModal/FileItem/FileItem.style';

interface FileItemProps {
  fileName: string;
}

const FileItem = ({ fileName }: FileItemProps) => {
  return (
    <li css={fileItemWrapperStyle}>
      <IcFileItem width={20} height={20} css={{ margin: '1.2rem' }} />
      <Text tag="body8">{fileName}</Text>
    </li>
  );
};

export default FileItem;
