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
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',

  width: '39rem',
  height: '21.6rem',

  margin: '0 auto',

  alignItems: 'center',
  justifyContent: 'space-between',
});

export const timestyle = css({
  position: 'absolute',

  top: '20rem',
  right: '13rem',

  color: theme.colors.key_500,
  ...theme.text.body04,
});
