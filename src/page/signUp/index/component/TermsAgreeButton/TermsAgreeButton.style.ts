import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const buttonStyle = (isClicked: boolean) =>
  css({
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',

    width: '100%',

    padding: '1.2rem',

    border: 'none',
    borderRadius: '8px',
    backgroundColor: isClicked ? theme.colors.blue_100 : theme.colors.gray_100,
    color: isClicked ? theme.colors.key_500 : theme.colors.black,

    ...theme.text.body08,
    fontWeight: 500,

    cursor: 'pointer',

    '& > svg': {
      '& > path': {
        fill: isClicked ? theme.colors.key_500 : theme.colors.gray_800,
      },
    },
  });
