import { IcCheckBlue } from '@tiki/icon';
import { Flex, Text, theme } from '@tiki/ui';

import { KeyboardEvent } from 'react';

import { components } from '@/shared/__generated__/schema';
import {
  containerStyle,
  rightSideRowStyle,
  timeStyle,
} from '@/shared/component/TimeBlockModal/component/UploadModal/BrowseFile/BrowseFileItem.style';
import { getFormattedDate } from '@/shared/util/date';
import { extractFileExtension, extractFileName } from '@/shared/util/file';

type DocumentItem = components['schemas']['DocumentGetResponse'];

type FileListItemProps = Omit<DocumentItem, 'type'> & {
  isSelected: boolean;
  onSelect: () => void;
};

const BrowseFileItem = ({ documentId, name, createdTime, url, isSelected, onSelect }: FileListItemProps) => {
  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onSelect();
    }
  };

  return (
    <div key={documentId} css={{ margin: '0.4rem', borderBottom: `1px solid ${theme.colors.gray_300}` }}>
      <div css={containerStyle(isSelected)} onClick={onSelect} onKeyDown={handleKeyPress} role="button" tabIndex={0}>
        <Flex styles={{ grow: '0.5', align: 'center', gap: '1.6rem' }}>
          <Text tag="body6">{extractFileName(name)}</Text>
        </Flex>
        <div css={rightSideRowStyle}>
          <Text tag="body6">{extractFileExtension(name)}</Text>
          <Text tag="body6">{url?.split('.').at(-1)}</Text>
          <time css={timeStyle} dateTime={createdTime}>
            {getFormattedDate(createdTime ?? new Date().toISOString())}
            {
              <IcCheckBlue
                width={16}
                height={16}
                css={{ flexShrink: '0', visibility: isSelected ? 'visible' : 'hidden' }}
              />
            }
          </time>
        </div>
      </div>
    </div>
  );
};

export default BrowseFileItem;
