import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const blockStyle = (width: number, startPosition: number, floor: number, color: string) =>
  css({
    position: 'absolute',
    display: 'flex',

    zIndex: theme.zIndex.overlayTop,

    top: `${floor * 6}rem`,
    left: `${startPosition + 0.2}rem`,

    width: `${width - 0.4}rem`,
    height: '5.6rem',
    padding: '0.5rem',

    borderRadius: '100px',

    backgroundColor: `${color}`,
    ...theme.text.body04,

    overflow: 'hidden',
  });

export const spanStyle = {
  display: 'flex',

  padding: '2rem 0.8rem',
  minWidth: '0rem',

  justifyContent: 'center',
  alignItems: 'center',
  flexShrink: '0',

  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};
