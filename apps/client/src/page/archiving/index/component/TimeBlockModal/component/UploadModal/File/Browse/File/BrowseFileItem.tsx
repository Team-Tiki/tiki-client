import { Flex, Text } from '@tiki/ui';

import {
  containerStyle,
  rightSideRowStyle,
  timeStyle,
} from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/File/Browse/File/BrowseFileItem.style';

import { components } from '@/shared/__generated__/schema';
import { getFormattedDate } from '@/shared/util/date';
import { getFileVolume } from '@/shared/util/file';

type DocumentItem = components['schemas']['DocumentGetResponse'];

type FileListItemProps = Omit<DocumentItem, 'type'> & {
  isSelected?: boolean;
  onSelect?: () => void;
};

const BrowseFileItem = ({
  name,
  createdTime,
  url,
  capacity,
  isSelected = false,
  onSelect = () => {},
}: FileListItemProps) => {
  return (
    <div css={containerStyle(isSelected)} onSelect={onSelect}>
      <Flex styles={{ grow: '0.5', align: 'center', gap: '1.6rem' }}>
        <Text tag="body6">{name}</Text>
      </Flex>

      <div css={rightSideRowStyle}>
        <Text tag="body6">{getFileVolume(capacity ?? 0)}</Text>
        <Text tag="body6">{url?.split('.').at(-1)}</Text>
        <time css={timeStyle} dateTime={createdTime}>
          {getFormattedDate(createdTime ?? new Date().toISOString())}
        </time>
      </div>
    </div>
  );
};

export default BrowseFileItem;
