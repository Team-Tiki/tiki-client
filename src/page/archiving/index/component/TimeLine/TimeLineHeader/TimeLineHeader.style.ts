import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const headerStyle = css({
  display: 'flex',

  alignItems: 'center',

  gap: '1.2rem',
});

export const commonStyle = css({
  border: `1px solid ${theme.colors.gray_300}`,
  borderRadius: '0.8rem',

  cursor: 'pointer',
});

export const arrowStyle = css({
  padding: '0.6rem',
});

export const dateStyle = css({
  ...theme.text.body04,

  whiteSpace: 'nowrap',
});

export const buttonStyle = css({
  padding: '1rem 1.4rem',

  color: theme.colors.gray_800,
  backgroundColor: theme.colors.white,

  ...theme.text.body08,
});