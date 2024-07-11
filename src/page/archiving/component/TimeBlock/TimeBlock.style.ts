import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const blockStyle = (width: number, startPosition: number, floor: number, color: string) =>
  css({
    position: 'absolute',
    display: 'flex',

    zIndex: theme.zIndex.overlayMiddle,

    top: `${floor * 6 - 2.4}rem`,
    left: `${startPosition + 0.2}rem`,

    width: `${width - 0.4}rem`,
    height: '5.6rem',
    padding: '0.5rem',

    borderRadius: '100px',

    backgroundColor: `${color}`,
    ...theme.text.body04,

    overflow: 'hidden',
    cursor: 'pointer',
  });

export const spanStyle = {
  margin: 'auto 0.7rem',

  lineHeight: '120%',

  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};
