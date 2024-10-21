import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  display: 'flex',
  alignItems: 'center',

  width: '100%',
  height: '4.8rem',

  padding: '1.4rem 0',

  '&  p, &  time': {
    ...theme.text.body06,
    fontWeight: 400,
  },
});

export const rightSideRowStyle = css({
  flex: 1,
  display: 'grid',
  gridTemplateColumns: '3fr 2fr 3.6fr 0.4fr',
  alignItems: 'center',
});
