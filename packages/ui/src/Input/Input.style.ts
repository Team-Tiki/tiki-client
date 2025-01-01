import { css } from '@emotion/react';

import { theme } from '@/theme';

export const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',

  width: '100%',

  '&>label': {
    margin: '0 0 1rem',
  },
});

export const inputStyle = (isDisabled: boolean) =>
  css({
    width: '100%',

    border: 'none',

    backgroundColor: isDisabled ? theme.colors.gray_100 : 'none',
    color: isDisabled ? theme.colors.gray_500 : 'inherit',
    fontWeight: 400,
    ...theme.text.body06,

    outline: 'none',

    '::placeholder': {
      color: theme.colors.gray_500,
      ...theme.text.body06,
    },
  });

export const contentStyle = (isFilled: boolean, isDisabled: boolean) =>
  css({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',

    position: 'relative',

    height: '4rem',

    padding: '1.3rem 1.2rem',

    backgroundColor: isFilled || isDisabled ? theme.colors.gray_100 : 'none',
    boxShadow: theme.shadow.inset,
    borderRadius: '8px',

    '&:focus-within': {
      boxShadow: theme.shadow.inset_focus,
    },
  });
