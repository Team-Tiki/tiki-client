import IcFolder from '@/common/asset/svg/ic_folder_large.svg?react';
import IcOption from '@/common/asset/svg/ic_three_dots.svg?react';
import Flex from '@/common/component/Flex/Flex';
import Heading from '@/common/component/Heading/Heading';
import Menu from '@/common/component/Menu/Menu';
import MenuItem from '@/common/component/Menu/MenuItem/MenuItem';
import MenuList from '@/common/component/Menu/MenuList/MenuList';
import { useOverlay } from '@/common/hook';
import { theme } from '@/common/style/theme/theme';

import { OPTION_ICON } from '@/shared/component/FileGrid/icon';
import { cardStyle, iconWrapperStyle, nameStyle, optionTextStyle } from '@/shared/component/FileGrid/index.style';

type FolderGridProps = {
  title: string;
  isSmall?: boolean;
  /** API 명세에 따라 달라질 수 있음 + 추후 삭제 */

  /**
   * TODO
   * onChangeName
   * onDownloadAll
   * onDelete
   */
};

const FolderGrid = ({ title, isSmall = false }: FolderGridProps) => {
  const { isOpen, close, toggle } = useOverlay();

  return (
    <article css={cardStyle(isSmall)}>
      <div css={iconWrapperStyle(isSmall)}>{<IcFolder width={40} height={40} />}</div>

      <Flex styles={{ width: '100%', justify: 'space-between', align: 'center' }}>
        <Heading css={nameStyle} tag="H3">
          {title}
        </Heading>

        {!isSmall && (
          <Menu onClose={close}>
            <IcOption onClick={toggle} css={{ cursor: 'pointer' }} width={16} height={16} />
            <MenuList
              css={{ top: 'calc(100% + 0.4rem)', right: 0, backgroundColor: theme.colors.white }}
              isOpen={isOpen}>
              <MenuItem css={optionTextStyle} LeftIcon={OPTION_ICON.name} onSelect={() => console.log('select')}>
                이름 변경
              </MenuItem>
              <MenuItem css={optionTextStyle} LeftIcon={OPTION_ICON.download} onSelect={() => console.log('select')}>
                폴더 전체 다운로드
              </MenuItem>
              <MenuItem css={optionTextStyle} LeftIcon={OPTION_ICON.deleted} onSelect={() => console.log('select')}>
                휴지통으로 이동
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Flex>
    </article>
  );
};

export default FolderGrid;
