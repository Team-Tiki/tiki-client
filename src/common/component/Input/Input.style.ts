import { css } from '@emotion/react';

import { InputProps } from '@/common/component/Input/Input';
import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',

  gap: '0.2rem',

  width: '100%',

  '&>label': {
    margin: '0 0 1rem',
  },
});

export const inputStyle = css({
  width: '100%',

  border: 'none',
  backgroundColor: 'transparent',
  fontWeight: 400,
  ...theme.text.body06,

  outline: 'none',

  '::placeholder': {
    color: theme.colors.gray_500,
    ...theme.text.body06,
  },
});

export const contentStyle = (isFilled: boolean) =>
  css({
    display: 'flex',
    alignItems: 'center',

    padding: '1.3rem 1.2rem',

    backgroundColor: isFilled ? theme.colors.gray_100 : 'none',
    boxShadow: `inset 0px 0px 0px 1px ${theme.colors.gray_300}`,
    borderRadius: '8px',

    '&:focus-within': {
      boxShadow: `inset 0px 0px 0px 1px ${theme.colors.key_500}`,
    },
  });
