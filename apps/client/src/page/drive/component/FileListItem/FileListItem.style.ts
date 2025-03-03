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

  borderBottom: `1px solid ${theme.colors.gray_300}`,

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

export const nameFieldStyle = css({
  padding: '0 1rem 0 1.6rem',
  lineHeight: '1.6rem',
});
