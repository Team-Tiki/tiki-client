import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

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
