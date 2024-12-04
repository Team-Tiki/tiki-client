import { IcFolderLarge, IcThreeDots } from '@tiki/icon';
import { Flex, Heading, MenuItem, MenuList, MenuRoot, theme } from '@tiki/ui';
import { useOverlay } from '@tiki/utils';

import { OPTION_ICON } from '@/shared/component/FileGrid/icon';
import { cardStyle, iconWrapperStyle, nameStyle, optionTextStyle } from '@/shared/component/FileGrid/index.style';

type FolderGridProps = {
  variant?: 'primary' | 'secondary';
  title: string;
  /** API 명세에 따라 달라질 수 있음 + 추후 삭제 */

  /**
   * TODO
   * onChangeName
   * onDownloadAll
   * onDelete
   */
};

const FolderGrid = ({ title, variant = 'primary' }: FolderGridProps) => {
  const { isOpen, close, toggle } = useOverlay();

  return (
    <article css={cardStyle(variant !== 'primary')}>
      <div css={iconWrapperStyle(variant !== 'primary')}>{<IcFolderLarge width={40} height={40} />}</div>

      <Flex styles={{ width: '100%', justify: 'space-between', align: 'center' }}>
        <Heading css={nameStyle} tag="H3">
          {title}
        </Heading>

        {variant === 'primary' && (
          <MenuRoot onClose={close}>
            <IcThreeDots onClick={toggle} css={{ cursor: 'pointer' }} width={16} height={16} />
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
          </MenuRoot>
        )}
      </Flex>
    </article>
  );
};

export default FolderGrid;
