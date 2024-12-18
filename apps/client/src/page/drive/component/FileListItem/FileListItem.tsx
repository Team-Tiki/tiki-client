import { IcThreeDots } from '@tiki/icon';
import { CheckBox, Flex, Text } from '@tiki/ui';

import { containerStyle, rightSideRowStyle, timeStyle } from '@/page/drive/component/FileListItem/FileListItem.style';

import { DocumentItem } from '@/shared/api/teams/drive/type';
import { getFormattedDate } from '@/shared/util/date';
import { getFileVolume } from '@/shared/util/file';

type FileListItemProps = Omit<DocumentItem, 'documentId' | 'type'> & {
  isSelected?: boolean;
  onSelect?: () => void;
};

const FileListItem = ({
  name,
  createdTime,
  url,
  capacity,
  isSelected = false,
  onSelect = () => {},
}: FileListItemProps) => {
  return (
    <div css={containerStyle}>
      <Flex styles={{ grow: '0.5', align: 'center', gap: '1.6rem' }}>
        <CheckBox isChecked={isSelected} onChange={onSelect} />
        <Text tag="body6">{name}</Text>
      </Flex>

      <div css={rightSideRowStyle}>
        <Text tag="body6">{getFileVolume(capacity ?? 0)}</Text>
        <Text tag="body6">{url?.split('.').at(-1)}</Text>
        <time css={timeStyle} dateTime={createdTime}>
          {getFormattedDate(createdTime ?? new Date().toISOString())}
        </time>
        <IcThreeDots onClick={() => {}} css={{ cursor: 'pointer' }} role="button" width={20} height={20} />
      </div>
    </div>
  );
};

export default FileListItem;
