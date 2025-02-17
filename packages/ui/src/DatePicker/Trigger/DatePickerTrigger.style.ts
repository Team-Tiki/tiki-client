import { css } from '@emotion/react';

import { theme } from '@/theme';

export const textStyle = css({
  color: theme.colors.gray_800,
});

export const dateInputStyle = css({
  cursor: 'pointer',
  width: '100%',
  ...theme.text.body06,

  textAlign: 'center',
  '::placeholder': { ...theme.text.body06, textAlign: 'center' },
});
