import { IcThreeDots } from '@tiki/icon';
import { CheckBox, Flex, Text } from '@tiki/ui';

import { containerStyle, rightSideRowStyle, timeStyle } from '@/page/drive/component/FileListItem/FileListItem.style';

import { components } from '@/shared/__generated__/schema';
import { getFormattedDate } from '@/shared/util/date';

type FolderListItemProps = Omit<components['schemas']['FolderGetResponse'], 'folderId' | 'type'> & {
  isSelected?: boolean;
  isSelectable: boolean;
  onSelect?: () => void;
};

const FolderListItem = ({
  name,
  createdTime,
  isSelected = false,
  isSelectable,
  onSelect = () => {},
}: FolderListItemProps) => {
  return (
    <div css={containerStyle}>
      <Flex styles={{ grow: '0.5', align: 'center', gap: '1.6rem' }}>
        {isSelectable && <CheckBox isChecked={isSelected} onChange={onSelect} />}
        <Text tag="body6">{name}</Text>
      </Flex>

      <div css={rightSideRowStyle}>
        <Text tag="body6">---</Text>
        <Text tag="body6">폴더</Text>
        <time css={timeStyle} dateTime={createdTime}>
          {getFormattedDate(createdTime ?? new Date().toISOString())}
        </time>
        <IcThreeDots onClick={() => {}} css={{ cursor: 'pointer' }} role="button" width={20} height={20} />
      </div>
    </div>
  );
};

export default FolderListItem;
