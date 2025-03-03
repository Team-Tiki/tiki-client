import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

import { ellipsisStyle } from '@/common/style/ellipsis';

export const headerStyle = css({
  display: 'grid',
  gridTemplateColumns: '0.55fr 0.45fr',
  alignItems: 'center',

  width: '100%',
  height: '4.8rem',

  padding: '1.4rem 0',

  borderBottom: `1px solid ${theme.colors.gray_300}`,

  '& p': {
    fontWeight: 400,
    color: theme.colors.gray_500,
    ...ellipsisStyle,
  },
});

export const rightSideRowStyle = css({
  flex: 0.5,

  display: 'grid',
  gridTemplateColumns: '3fr 2fr 3.6fr 0.4fr',
  alignItems: 'center',
});
