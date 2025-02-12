import { IcThreeDots } from '@tiki/icon';
import { CheckBox, Flex, MenuItem, MenuList, MenuRoot, Text } from '@tiki/ui';
import { useOverlay } from '@tiki/utils';

import { useRef } from 'react';

import {
  containerStyle,
  nameFieldStyle,
  rightSideRowStyle,
  timeStyle,
} from '@/page/drive/component/FileListItem/FileListItem.style';

import { components } from '@/shared/__generated__/schema';
import { OPTION_ICON } from '@/shared/component/FileGrid/icon';
import { optionListStyle, optionTextStyle } from '@/shared/component/FileGrid/index.style';
import { checkDropdownPosition } from '@/shared/component/FileGrid/util';
import { getFormattedDate } from '@/shared/util/date';

type FolderListItemProps = Omit<components['schemas']['FolderGetResponse'], 'folderId' | 'type'> & {
  isSelected?: boolean;
  isSelectable: boolean;
  onSelect?: () => void;
  onDelete?: () => void;
};

const FolderListItem = ({
  name,
  createdTime,
  isSelected = false,
  isSelectable,
  onSelect = () => {},
  onDelete = () => {},
}: FolderListItemProps) => {
  const { isOpen, close, toggle } = useOverlay();

  const optionRef = useRef<HTMLDivElement | null>(null);

  const getRenderedSection = () => {
    if (!optionRef.current) return null;

    const { x, y } = optionRef.current.getBoundingClientRect();

    return checkDropdownPosition(x, y);
  };

  return (
    <div css={containerStyle}>
      <Flex styles={{ grow: '0.5', align: 'center', gap: '1.6rem' }}>
        {isSelectable && <CheckBox isChecked={isSelected} onChange={onSelect} />}
        <Text tag="body6" css={nameFieldStyle}>
          {name}
        </Text>
      </Flex>

      <div css={rightSideRowStyle}>
        <Text tag="body6">---</Text>
        <Text tag="body6">폴더</Text>
        <time css={timeStyle} dateTime={createdTime}>
          {getFormattedDate(createdTime ?? new Date().toISOString())}
        </time>
        <MenuRoot onClose={close}>
          <div ref={optionRef}>
            {<IcThreeDots onClick={toggle} css={{ cursor: 'pointer' }} width={16} height={16} />}
          </div>
          <MenuList css={optionListStyle(getRenderedSection())} isOpen={isOpen}>
            <MenuItem
              css={optionTextStyle}
              LeftIcon={OPTION_ICON.download}
              onSelect={() => {
                alert('준비 중인 기능입니다.');
              }}>
              파일 다운로드
            </MenuItem>
            <MenuItem css={optionTextStyle} LeftIcon={OPTION_ICON.deleted} onSelect={onDelete}>
              휴지통으로 이동
            </MenuItem>
            <MenuItem
              css={optionTextStyle}
              LeftIcon={OPTION_ICON.handover}
              onSelect={() => {
                alert('준비 중인 기능입니다.');
              }}>
              인수인계 노트 보기
            </MenuItem>
          </MenuList>
        </MenuRoot>
      </div>
    </div>
  );
};

export default FolderListItem;
