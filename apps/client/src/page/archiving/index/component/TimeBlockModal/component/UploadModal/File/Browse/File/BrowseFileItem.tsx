import { Flex, Text, theme } from '@tiki/ui';

import {
  containerStyle,
  rightSideRowStyle,
  timeStyle,
} from '@/page/archiving/index/component/TimeBlockModal/component/UploadModal/File/Browse/File/BrowseFileItem.style';

import { components } from '@/shared/__generated__/schema';
import { getFormattedDate } from '@/shared/util/date';
import { extractFileExtension, extractFileName } from '@/shared/util/file';

type DocumentItem = components['schemas']['DocumentGetResponse'];

type FileListItemProps = Omit<DocumentItem, 'type'> & {
  isSelected?: boolean;
  onSelect?: () => void;
};

const BrowseFileItem = ({ name, createdTime, url, isSelected = false, onSelect = () => {} }: FileListItemProps) => {
  return (
    <div css={{ margin: '0.4rem', borderBottom: `1px solid ${theme.colors.gray_300}` }}>
      <div css={containerStyle(isSelected)} onSelect={onSelect}>
        <Flex styles={{ grow: '0.5', align: 'center', gap: '1.6rem' }}>
          <Text tag="body6">{extractFileName(name)}</Text>
        </Flex>

        <div css={rightSideRowStyle}>
          <Text tag="body6">{extractFileExtension(name)}</Text>
          <Text tag="body6">{url?.split('.').at(-1)}</Text>
          <time css={timeStyle} dateTime={createdTime}>
            {getFormattedDate(createdTime ?? new Date().toISOString())}
          </time>
        </div>
      </div>
    </div>
  );
};

export default BrowseFileItem;
