import { IcCheckBlue } from '@tiki/icon';
import { Flex, Text, theme } from '@tiki/ui';

import { KeyboardEvent } from 'react';

import { components } from '@/shared/__generated__/schema';
import {
  containerStyle,
  fileNameStyle,
  iconStyle,
  rightSideRowStyle,
  timeStyle,
} from '@/shared/component/BrowseFileItem/BrowseFileItem.style';
import { getFormattedDate } from '@/shared/util/date';
import { extractFileExtension, extractFileName } from '@/shared/util/file';

type DocumentItem = components['schemas']['DocumentGetResponse'];

type FileListItemProps = Omit<DocumentItem, 'type'> & {
  isSelected: boolean;
  onSelect: () => void;
};

const BrowseFileItem = ({ documentId, name, createdTime, isSelected, onSelect }: FileListItemProps) => {
  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onSelect();
    }
  };

  return (
    <div key={documentId} css={{ margin: '0.4rem', borderBottom: `1px solid ${theme.colors.gray_300}` }}>
      <div css={containerStyle(isSelected)} onClick={onSelect} onKeyDown={handleKeyPress} role="button" tabIndex={0}>
        <Flex styles={{ grow: '0.5', align: 'center', gap: '1.6rem' }}>
          <Text tag="body6" css={fileNameStyle}>
            {extractFileName(name)}
          </Text>
        </Flex>
        <div css={rightSideRowStyle}>
          <Text tag="body6">{extractFileExtension(name)}</Text>
          <time css={timeStyle} dateTime={createdTime}>
            {getFormattedDate(createdTime ?? new Date().toISOString())}
            {<IcCheckBlue width={16} height={16} css={iconStyle(isSelected)} />}
          </time>
        </div>
      </div>
    </div>
  );
};

export default BrowseFileItem;
