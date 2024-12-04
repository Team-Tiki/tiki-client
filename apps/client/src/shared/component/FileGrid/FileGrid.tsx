import { IcThreeDots } from '@tiki/icon';
import { CheckBox, Flex, Heading, MenuItem, MenuList, MenuRoot, Text } from '@tiki/ui';
import { useOverlay } from '@tiki/utils';

import { useRef } from 'react';

import { FILE_ICON, OPTION_ICON } from '@/shared/component/FileGrid/icon';
import {
  cardStyle,
  iconWrapperStyle,
  nameStyle,
  optionListStyle,
  optionTextStyle,
  textStyle,
} from '@/shared/component/FileGrid/index.style';
import { File } from '@/shared/type/file';
import { getFileVolume } from '@/shared/util/file';

export type FileGridProps = {
  variant?: 'primary' | 'secondary';
  title: string;
  /** API 명세에 따라 달라질 수 있음 + 추후 삭제 */
  type: File['type'];
  volume: number;

  isSelectable?: boolean;
  onSelect?: () => void;
  isSelected?: boolean;

  /**
   * [TODO]
   * onDownLoad
   * onDelete
   * onShowNote
   */
};

const getIconByType = (type: string) => {
  if (type === 'pdf') {
    return FILE_ICON['pdf'];
  } else if (type === 'word') {
    return FILE_ICON['word'];
  } else {
    return FILE_ICON['image'];
  }
};

const FileGrid = ({
  title,
  type,
  volume,
  variant = 'primary',
  isSelectable = false,
  onSelect,
  isSelected = false,
}: FileGridProps) => {
  const { isOpen, close, toggle } = useOverlay();

  const optionRef = useRef<HTMLDivElement | null>(null);

  const checkDropdownPosition = () => {
    if (!optionRef.current) return false;

    const { y } = optionRef.current.getBoundingClientRect();

    /** y 위치 + 드롭다운 높이 + 드롭다운 transformY > 뷰포트 높이 - 뷰포트 패딩바텀 */
    return y + 118 + 20 < document.documentElement.clientHeight - 48;
  };

  return (
    <article css={cardStyle(variant !== 'primary')}>
      {isSelectable && (
        <CheckBox css={{ position: 'absolute', right: 20 }} isChecked={isSelected} onChange={() => onSelect?.()} />
      )}
      <div css={iconWrapperStyle(variant !== 'primary')}>{getIconByType(type)}</div>
      <Flex
        styles={{
          direction: 'column',
          gap: variant === 'primary' ? '1.2rem' : '0.8rem',
        }}>
        <Flex styles={{ width: '100%', justify: 'space-between', align: 'center' }}>
          <Heading css={nameStyle} tag="H3">
            {title}
          </Heading>
          {variant === 'primary' && (
            <MenuRoot onClose={close}>
              <div ref={optionRef}>
                <IcThreeDots onClick={toggle} css={{ cursor: 'pointer' }} width={16} height={16} />
              </div>
              <MenuList css={optionListStyle(checkDropdownPosition())} isOpen={isOpen}>
                <MenuItem css={optionTextStyle} LeftIcon={OPTION_ICON.download} onSelect={() => {}}>
                  파일 다운로드
                </MenuItem>
                <MenuItem css={optionTextStyle} LeftIcon={OPTION_ICON.deleted} onSelect={() => {}}>
                  휴지통으로 이동
                </MenuItem>
                <MenuItem css={optionTextStyle} LeftIcon={OPTION_ICON.handover} onSelect={() => {}}>
                  인수인계 노트 보기
                </MenuItem>
              </MenuList>
            </MenuRoot>
          )}
        </Flex>

        <Flex styles={{ width: '100%', justify: 'space-between', align: 'center' }}>
          <Text tag="body8" css={textStyle}>
            {type} 문서
          </Text>
          <Text tag="body8" css={textStyle}>
            {getFileVolume(volume)}
          </Text>
        </Flex>
      </Flex>
    </article>
  );
};

export default FileGrid;
