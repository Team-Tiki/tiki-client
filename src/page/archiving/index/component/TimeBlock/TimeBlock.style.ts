import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const blockStyle = (width: number, startPosition: number, floor: number, color: string, isSelected: boolean) =>
  css({
    position: 'absolute',
    display: 'flex',

    zIndex: theme.zIndex.overlayBottom,

    top: `${floor * 6 - 1.6}rem`,
    left: `${startPosition + 0.2}rem`,

    width: `${width - 0.4}rem`,
    height: '5.6rem',
    padding: '0.5rem',

    borderRadius: '100px',
    backgroundColor: `${color}`,

    ...theme.text.body04,

    transform: `scale(${isSelected && 1.05})`,
    transition: 'all .1s ease-in',

    overflow: 'hidden',
    cursor: 'pointer',
  });

export const blockNameStyle = {
  margin: 'auto 0.7rem',

  lineHeight: '120%',

  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};
