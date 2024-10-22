import { MouseEvent, useRef } from 'react';

import IcOption from '@/common/asset/svg/ic_three_dots.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Menu from '@/common/component/Menu/Menu';
import MenuItem from '@/common/component/Menu/MenuItem/MenuItem';
import MenuList from '@/common/component/Menu/MenuList/MenuList';
import Text from '@/common/component/Text/Text';
import { useOverlay } from '@/common/hook';

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

type FileGridProps = {
  title: string;
  /** API 명세에 따라 달라질 수 있음 + 추후 삭제 */
  type: File['type'];
  volume: number;

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

const FileGrid = ({ title, type, volume }: FileGridProps) => {
  const { isOpen, close, toggle } = useOverlay();

  const optionRef = useRef<HTMLDivElement | null>(null);

  const checkDropdownPosition = () => {
    if (!optionRef.current) return false;

    const { y } = optionRef.current.getBoundingClientRect();

    /** y 위치 + 드롭다운 높이 + 드롭다운 transformY > 뷰포트 높이 - 뷰포트 패딩바텀 */
    return y + 118 + 20 < document.documentElement.clientHeight - 48;
  };

  const handleOptionClick = (e: MouseEvent) => {
    toggle();

    if (!optionRef.current?.contains(e.target as Node)) {
      close();
    }
  };

  return (
    <article css={cardStyle}>
      <div css={iconWrapperStyle}>{getIconByType(type)}</div>
      <Flex
        styles={{
          direction: 'column',
          gap: '1.2rem',
        }}>
        <Flex styles={{ width: '100%', justify: 'space-between', align: 'center' }}>
          <Heading css={nameStyle} tag="H3">
            {title}
          </Heading>
          <Menu onClose={close}>
            <div ref={optionRef}>
              <IcOption onClick={handleOptionClick} css={{ cursor: 'pointer' }} width={16} height={16} />
            </div>
            <MenuList css={optionListStyle(checkDropdownPosition())} isOpen={isOpen}>
              <MenuItem css={optionTextStyle} LeftIcon={OPTION_ICON.download} onSelect={() => console.log('select')}>
                파일 다운로드
              </MenuItem>
              <MenuItem css={optionTextStyle} LeftIcon={OPTION_ICON.deleted} onSelect={() => console.log('select')}>
                휴지통으로 이동
              </MenuItem>
              <MenuItem css={optionTextStyle} LeftIcon={OPTION_ICON.handover} onSelect={() => console.log('select')}>
                인수인계 노트 보기
              </MenuItem>
            </MenuList>
          </Menu>
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
