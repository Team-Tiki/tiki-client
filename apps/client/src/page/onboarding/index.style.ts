import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const pageStyle = css({
  display: 'flex',

  height: 'calc(100vh - 9rem)',

  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const textStyle = css({
  color: theme.colors.gray_800,
});
