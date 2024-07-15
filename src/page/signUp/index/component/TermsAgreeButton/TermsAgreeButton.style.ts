import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const buttonStyle = (isClicked: boolean) =>
  css({
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',

    width: '100%',

    padding: '1.2rem 1rem',

    border: 'none',
    borderRadius: '8px',
    backgroundColor: isClicked ? theme.colors.blue_100 : theme.colors.gray_100,
    color: isClicked ? theme.colors.blue_900 : theme.colors.black,

    fontSize: theme.text.body04.fontSize,
    lineHeight: theme.text.body04.lineHeight,

    cursor: 'pointer',

    '& > svg': {
      width: '2.4rem',
      height: '2.4rem',
    },
  });
