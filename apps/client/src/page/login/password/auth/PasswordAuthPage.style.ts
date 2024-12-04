import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const pageStyle = css({
  flexDirection: 'column',

  width: '39rem',
  height: '30rem',

  justifyContent: 'center',

  whiteSpace: 'nowrap',
});

export const formStyle = css({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',

  width: '39rem',
  height: '21.6rem',

  margin: '0 auto',

  alignItems: 'center',
  justifyContent: 'space-between',
});

export const timestyle = css({
  position: 'absolute',

  top: '7.8rem',
  right: '11.2rem',

  color: theme.colors.gray_500,
  ...theme.text.body06,
});
