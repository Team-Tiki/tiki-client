import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const blockStyle = (width: number, startPosition: number, level: number, color: string) =>
  css({
    position: 'absolute',
    display: 'flex',

    zIndex: theme.zIndex.overlayTop,
    top: '16.6rem',
    left: `${startPosition}rem`,

    width: `${width}rem`,
    height: '5.6rem',
    padding: '0.5rem',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: '100px',

    backgroundColor: `${color}`,
    ...theme.text.body03,

    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  });

export const spanStyle = {
  padding: '2rem 0.8rem',
  marginRight: 'auto',

  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};
