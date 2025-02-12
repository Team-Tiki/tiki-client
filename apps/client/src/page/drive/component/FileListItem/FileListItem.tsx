import { IcThreeDots } from '@tiki/icon';
import { CheckBox, Flex, MenuItem, MenuList, MenuRoot, Text } from '@tiki/ui';
import { useOutsideClick, useOverlay } from '@tiki/utils';

import { containerStyle, rightSideRowStyle, timeStyle } from '@/page/drive/component/FileListItem/FileListItem.style';

import { components } from '@/shared/__generated__/schema';
import { OPTION_ICON } from '@/shared/component/FileGrid/icon';
import { optionListStyle, optionTextStyle } from '@/shared/component/FileGrid/index.style';
import { checkDropdownPosition } from '@/shared/component/FileGrid/util';
import { getFormattedDate } from '@/shared/util/date';
import { downloadDocument } from '@/shared/util/document';
import { getFileVolume } from '@/shared/util/file';

type DocumentItem = components['schemas']['DocumentGetResponse'];

type FileListItemProps = Omit<DocumentItem, 'type'> & {
  isSelectable?: boolean;
  isSelected?: boolean;
  onSelect?: () => void;
  onDelete?: (documentId: number) => void;
};

const FileListItem = ({
  documentId,
  name,
  createdTime,
  url,
  capacity,
  isSelectable,
  isSelected = false,
  onSelect = () => {},
  onDelete = () => {},
}: FileListItemProps) => {
  const { isOpen, toggle, close } = useOverlay();
  const ref = useOutsideClick(close);

  const getRenderedSection = () => {
    if (!ref.current) return null;

    const { x, y } = ref.current.getBoundingClientRect();

    return checkDropdownPosition(x, y);
  };

  return (
    <div css={containerStyle}>
      <Flex styles={{ grow: '0.5', align: 'center', gap: '1.6rem' }}>
        {isSelectable && <CheckBox isChecked={isSelected} onChange={onSelect} />}
        <Text tag="body6" css={{ lineHeight: '1.6rem' }}>
          {name}
        </Text>
      </Flex>

      <div css={rightSideRowStyle}>
        <Text tag="body6" css={{ lineHeight: '1.6rem' }}>
          {getFileVolume(capacity ?? 0)}
        </Text>
        <Text tag="body6" css={{ lineHeight: '1.6rem' }}>
          {url?.split('.').at(-1)}
        </Text>
        <time css={timeStyle} dateTime={createdTime}>
          {getFormattedDate(createdTime ?? new Date().toISOString())}
        </time>

        <MenuRoot onClose={close}>
          <div ref={ref}>
            <IcThreeDots
              key={documentId}
              onClick={toggle}
              css={{ cursor: 'pointer' }}
              role="button"
              width={20}
              height={20}
            />
          </div>
          <MenuList css={optionListStyle(getRenderedSection())} isOpen={isOpen}>
            <MenuItem
              css={optionTextStyle}
              LeftIcon={OPTION_ICON.download}
              onSelect={() => {
                downloadDocument(url, name);
              }}>
              파일 다운로드
            </MenuItem>
            <MenuItem css={optionTextStyle} LeftIcon={OPTION_ICON.deleted} onSelect={() => onDelete(documentId)}>
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

export default FileListItem;
