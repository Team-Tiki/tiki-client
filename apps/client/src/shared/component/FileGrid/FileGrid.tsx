import { IcThreeDots } from '@tiki/icon';
import { CheckBox, Flex, Heading, MenuItem, MenuList, MenuRoot, Text } from '@tiki/ui';
import { useOverlay } from '@tiki/utils';

import { useRef } from 'react';

import { components } from '@/shared/__generated__/schema';
import { OPTION_ICON, getIconByType } from '@/shared/component/FileGrid/icon';
import {
  cardStyle,
  iconWrapperStyle,
  nameStyle,
  optionListStyle,
  optionTextStyle,
  textStyle,
} from '@/shared/component/FileGrid/index.style';
import { checkDropdownPosition } from '@/shared/component/FileGrid/util';
import { File } from '@/shared/type/file';
import { downloadDocument } from '@/shared/util/document';
import { getFileVolume } from '@/shared/util/file';

export type FileGridProps = components['schemas']['DocumentGetResponse'] & {
  variant?: 'primary' | 'secondary';
  /** API 명세에 따라 달라질 수 있음 + 추후 삭제 */
  type: File;
  isSelectable?: boolean;
  isSelected?: boolean;
  onSelect?: () => void;
  onDelete?: () => void;
  isDeleted?: boolean;
  onClick?: () => void;

  /**
   * [TODO]
   * onShowNote
   */
};

const FileGrid = ({
  name,
  capacity,
  type,
  url,
  variant = 'primary',
  isSelectable = false,
  onSelect,
  isSelected = false,
  isDeleted = false,
  onDelete = () => {},
  onClick = () => {},
}: FileGridProps) => {
  const { isOpen, close, toggle } = useOverlay();

  const optionRef = useRef<HTMLDivElement | null>(null);

  const getRenderedSection = () => {
    if (!optionRef.current) return null;

    const { x, y } = optionRef.current.getBoundingClientRect();

    return checkDropdownPosition(x, y);
  };

  return (
    <article css={cardStyle(variant !== 'primary')}>
      <button type="button" css={{ width: '100%', backgroundColor: 'transparent' }} onClick={onClick}>
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
              {name}
            </Heading>
            {variant === 'primary' && (
              <MenuRoot onClose={close}>
                <div ref={optionRef}>
                  {!isDeleted && <IcThreeDots onClick={toggle} css={{ cursor: 'pointer' }} width={16} height={16} />}
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
            )}
          </Flex>

          <Flex styles={{ width: '100%', justify: 'space-between', align: 'center' }}>
            <Text tag="body8" css={textStyle}>
              {type.toUpperCase()} 문서
            </Text>
            <Text tag="body8" css={textStyle}>
              {getFileVolume(capacity ?? 0)}
            </Text>
          </Flex>
        </Flex>
      </button>
    </article>
  );
};

export default FileGrid;
