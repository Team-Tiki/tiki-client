import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const noteWrapperStyle = css({
  display: 'flex',

  flexDirection: 'column',
  gap: '4rem',

  maxHeight: '45rem',

  paddingBottom: '5rem',

  overflowY: 'scroll',
});

export const layoutStyle = css({
  display: 'flex',
  flexDirection: 'column',

  width: '100%',

  gap: '1.6rem',
});

export const guideStyle = css({
  color: theme.colors.gray_800,

  ...theme.text.body04,
});

export const fileBoxStyle = css({
  display: 'flex',

  gap: '1.6rem',
});
