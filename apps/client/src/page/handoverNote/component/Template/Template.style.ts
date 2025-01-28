import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const noteWrapperStyle = css({
  display: 'flex',

  maxHeight: 'calc(100vh - 33rem)',

  flexDirection: 'column',
  gap: '4rem',

  paddingBottom: '5rem',

  overflow: 'scroll',
});

export const layoutStyle = css({
  display: 'flex',
  flexDirection: 'column',

  width: '100%',

  gap: '1.6rem',

  '& > label': {
    color: theme.colors.gray_800,
  },
});

export const guideStyle = css({
  color: theme.colors.gray_800,

  ...theme.text.body04,
});

export const fileBoxStyle = css({
  display: 'flex',

  flexWrap: 'wrap',

  gap: '1.6rem',
});

export const labelStyle = css({
  color: theme.colors.gray_800,
});
