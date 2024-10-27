import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

import { BlockColor } from '../../../type/color';

export const blockStyle = (
  width: number,
  startPosition: number,
  floor: number,
  color: string,
  isSelected: boolean,
  isOpen: boolean,
  drawerBlockWidth: number
) =>
  css({
    position: 'absolute',
    display: 'flex',

    alignItems: 'center',

    zIndex: theme.zIndex.overlayBottom,

    top: `${floor * 4.5 - 3.5}rem`,
    left: isOpen ? `${startPosition + 1}rem` : `${startPosition + 1.9}rem`,

    width: isOpen ? `${drawerBlockWidth}px` : `${width}px`,
    minWidth: '3.6rem',
    height: '3.6rem',
    padding: '0.6rem',

    gap: '0.6rem',

    borderRadius: '0.8rem',
    backgroundColor: `${color}`,

    ...theme.text.body08,

    transform: `scale(${isSelected && 1.05})`,
    transition: 'all .1s ease-in',

    overflow: 'hidden',
    cursor: 'pointer',
  });

export const blockNameStyle = (background: BlockColor) =>
  css({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    color: (() => {
      switch (background) {
        case '#FFE6E8':
          return theme.colors.red_200;
        case '#F8E2CB':
          return theme.colors.yellow_200;
        case '#C4F2E5':
          return theme.colors.green_200;
        case '#DCD8FA':
          return theme.colors.purple_200;
        case '#E2E8F8':
          return theme.colors.blue_200;
        case '#F8E1F5':
          return theme.colors.pink_200;
        case '#D3EFFA':
          return theme.colors.sky_200;
        default:
          return theme.colors.white;
      }
    })(),

    lineHeight: '1.8rem',
  });
