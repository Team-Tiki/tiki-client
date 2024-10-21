import IcOption from '@/common/asset/svg/ic_three_dots.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Menu from '@/common/component/Menu/Menu';
import MenuItem from '@/common/component/Menu/MenuItem/MenuItem';
import MenuList from '@/common/component/Menu/MenuList/MenuList';
import { useOverlay } from '@/common/hook';
import { theme } from '@/common/style/theme/theme';

import { FILE_ICON, OPTION_ICON } from '@/shared/component/FileGrid/icon';
import {
  cardStyle,
  iconWrapperStyle,
  nameStyle,
  optionTextStyle,
  textStyle,
} from '@/shared/component/FileGrid/index.style';
import { getFileVolume } from '@/shared/util/file';

type FileGridProps = {
  title: string;
  /** API 명세에 따라 달라질 수 있음 + 추후 삭제 */
  type: 'pdf' | 'image' | 'word';
  volume: number;

  /**
   * [TODO]
   * onDownLoad
   * onDelete
   * onShowNote
   */
};

const FileGrid = ({ title, type, volume }: FileGridProps) => {
  const { isOpen, close, toggle } = useOverlay();

  return (
    <article css={cardStyle}>
      <div css={iconWrapperStyle}>{FILE_ICON[type]}</div>
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
            <IcOption onClick={toggle} css={{ cursor: 'pointer' }} width={16} height={16} />
            <MenuList
              css={{ top: 'calc(100% + 0.4rem)', right: 0, backgroundColor: theme.colors.white }}
              isOpen={isOpen}>
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
          <p css={textStyle}>{type} 문서</p>
          <p css={textStyle}>{getFileVolume(volume)}</p>
        </Flex>
      </Flex>
    </article>
  );
};

export default FileGrid;
