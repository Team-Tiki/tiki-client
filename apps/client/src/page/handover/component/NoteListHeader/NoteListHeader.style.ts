import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const containerStyle = (canSelect: boolean) =>
  css({
    padding: '1.4rem 0',
    paddingLeft: canSelect ? '5rem' : '1.6rem',

    '& p': {
      color: theme.colors.gray_500,
    },
  });
