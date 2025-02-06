import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

import { ellipsisStyle } from '@/common/style/ellipsis';

export const headerStyle = css({
  position: 'fixed',
  display: 'grid',
  gridTemplateColumns: '0.55fr 0.46fr',
  alignItems: 'center',

  width: '76.8rem',
  height: '4.8rem',

  padding: '1.4rem 1.6rem',

  borderBottom: `1px solid ${theme.colors.gray_300}`,

  color: theme.colors.gray_500,
  backgroundColor: theme.colors.white,

  '& p': {
    fontWeight: 400,

    ...ellipsisStyle,
  },
});

export const rightSideRowStyle = css({
  display: 'grid',

  gridTemplateColumns: '1fr 2fr',
  alignItems: 'center',
});
