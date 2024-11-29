import { css } from '@emotion/react';

import { theme } from '@tiki/ui';

export const closeBtnStyle = css({
  position: 'absolute',

  right: '2.2rem',
  top: '3.2rem',

  cursor: 'pointer',
});

export const circleStyle = (color: string) =>
  css({
    alignItems: 'center',
    justifyContent: 'center',

    padding: '0.6rem',

    borderRadius: '18px',
    backgroundColor: color,
  });

export const listHeaderStyle = css({
  color: theme.colors.gray_800,
});
