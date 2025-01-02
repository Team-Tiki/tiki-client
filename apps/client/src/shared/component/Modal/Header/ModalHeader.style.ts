import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const infoTextStyle = css({
  color: theme.colors.gray_800,
});

export const iconTextStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '4rem',
  height: '4rem',

  fontWeight: 500,
  color: theme.colors.gray_800,

  textAlign: 'center',
});
