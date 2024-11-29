import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

import { ellipsisStyle } from '@/common/style/ellipsis';

export const containerStyle = css({
  display: 'grid',
  gridTemplateColumns: '0.55fr 0.45fr',
  alignItems: 'center',

  width: '100%',
  height: '4.8rem',

  padding: '1.4rem 0',

  '& p, & time': {
    fontWeight: 400,

    ...ellipsisStyle,
  },
});

export const timeStyle = css({
  ...theme.text.body06,
});

export const rightSideRowStyle = css({
  display: 'grid',
  gridTemplateColumns: '3fr 2fr 3.6fr 0.4fr',
  alignItems: 'center',
  gap: '0.2rem',
});
