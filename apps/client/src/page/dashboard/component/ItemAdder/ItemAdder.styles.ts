import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

import { PATH } from '@/shared/constant/path';

export const adderStyle = (path: string) =>
  css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    padding: path === PATH.DRIVE ? '4rem 6rem' : path === PATH.HANDOVER ? '3rem' : '9.8rem 36.8rem',

    width: path === PATH.HANDOVER ? '100%' : '',

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
  });
