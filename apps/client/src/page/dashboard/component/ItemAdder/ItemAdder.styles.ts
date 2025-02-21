import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

import { PATH } from '@/shared/constant/path';

export const adderStyle = (path: string) =>
  css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    padding: path === PATH.DRIVE ? '4rem 6rem' : '3rem',

    ...(path !== PATH.DRIVE && {
      width: '100%',
    }),
    ...(path === PATH.ARCHIVING && {
      minHeight: 'calc(100vh - 53rem)',
    }),

    border: 'none',
    borderRadius: '8px',

    backgroundColor: theme.colors.gray_100,

    ':hover': {
      backgroundColor: theme.colors.key_100,

      '&>*': {
        fill: theme.colors.key_400,

        transition: 'all ease-in 0.1s',
      },

      transition: 'all ease-in 0.1s',
    },

    cursor: 'pointer',
  });
