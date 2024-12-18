import { IcFolderLarge, IcThreeDots } from '@tiki/icon';
import { CheckBox, Flex, Heading, MenuItem, MenuList, MenuRoot, theme } from '@tiki/ui';
import { useOverlay } from '@tiki/utils';

import { OPTION_ICON } from '@/shared/component/FileGrid/icon';
import { cardStyle, iconWrapperStyle, nameStyle, optionTextStyle } from '@/shared/component/FileGrid/index.style';

type FolderGridProps = {
  variant?: 'primary' | 'secondary';
  name: string;
  path: string;
  createdTime: string;
  isSelectable?: boolean;
  onSelect?: () => void;
  isSelected?: boolean;
  /**
   * TODO
   * onChangeName
   * onDownloadAll
   * onDelete
   */
};

const FolderGrid = ({ name, variant = 'primary', isSelectable, isSelected = false, onSelect }: FolderGridProps) => {
  const { isOpen, close, toggle } = useOverlay();

  return (
    <article css={cardStyle(variant !== 'primary')}>
      {isSelectable && (
        <CheckBox css={{ position: 'absolute', right: 20 }} isChecked={isSelected} onChange={() => onSelect?.()} />
      )}
      <div css={iconWrapperStyle(variant !== 'primary')}>{<IcFolderLarge width={40} height={40} />}</div>

      <Flex styles={{ width: '100%', justify: 'space-between', align: 'center' }}>
        <Heading css={nameStyle} tag="H3">
          {name}
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
