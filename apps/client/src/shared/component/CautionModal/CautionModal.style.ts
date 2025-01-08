import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const contentStyle = css({
  fontWeight: '600',

  color: theme.colors.gray_800,
});

export const descStyle = css({
  color: theme.colors.gray_800,
});

export const bodyStyle = css({
  display: 'flex',

  height: '100%',

  padding: '2rem 0 6rem 0',

  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  gap: '1.6rem',
});
