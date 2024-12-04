import { IcThreeDots } from '@tiki/icon';
import { CheckBox, Flex, Text } from '@tiki/ui';

import { containerStyle, rightSideRowStyle, timeStyle } from '@/page/drive/component/FileListItem/FileListItem.style';

import { File } from '@/shared/type/file';
import { getFileVolume } from '@/shared/util/file';

type FileListItemProps = File & {
  isSelected?: boolean;
  onFileSelect?: () => void;
};

const FileListItem = ({
  title,
  volume,
  createdAt,
  type,
  isSelected = false,
  onFileSelect = () => {},
}: FileListItemProps) => {
  return (
    <div css={containerStyle}>
      <Flex styles={{ grow: '0.5', align: 'center', gap: '1.6rem' }}>
        <CheckBox isChecked={isSelected} onChange={onFileSelect} />
        <Text tag="body6">{title}</Text>
      </Flex>

      <div css={rightSideRowStyle}>
        <Text tag="body6">{getFileVolume(volume)}</Text>
        <Text tag="body6">{type}</Text>
        <time css={timeStyle} dateTime={createdAt}>
          {createdAt}
        </time>
        <IcThreeDots onClick={() => {}} css={{ cursor: 'pointer' }} role="button" width={20} height={20} />
      </div>
    </div>
  );
};

export default FileListItem;
