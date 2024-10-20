import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const blockStyle = (width: number, startPosition: number, floor: number, color: string, isSelected: boolean) =>
  css({
    position: 'absolute',
    display: 'flex',

    alignItems: 'center',

    zIndex: theme.zIndex.overlayBottom,

    top: `${floor * 4.5 - 1}rem`,
    left: `${startPosition + 0.2}rem`,

    width: `${width - 0.4}%`,
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

export const blockNameStyle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',

  lineHeight: '1.8rem',
};
