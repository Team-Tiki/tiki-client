import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const entireInfoStyle = css({
  display: 'flex',
  flexDirection: 'column',

  flexBasis: '34rem',
  padding: '3.2rem 1.7rem 3.2rem 3.2rem',

  borderRadius: '1.6rem 0 0 1.6rem',

  backgroundColor: theme.colors.gray_100,
});

export const titleStyle = css({
  width: '25rem',

  marginBottom: '3.6rem',

  outline: 'none',
  border: 'none',

  color: theme.colors.gray_800,
  backgroundColor: theme.colors.gray_100,

  fontWeight: 500,
  ...theme.heading.heading03,
  lineHeight: '3.6rem',

  wordBreak: 'break-all',
  resize: 'none',

  '::placeholder': {
    color: theme.colors.gray_500,
  },
});

export const infoContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',

  gap: '0.4rem',
});

export const infoLayoutStyle = (isTag?: boolean) =>
  css({
    display: 'flex',

    minHeight: '4rem',

    gap: '2rem',
    alignItems: 'center',

    ...(isTag && {
      ':nth-child(3)': {
        '& p': {
          display: 'flex',
          height: '100%',
          alignSelf: 'baseline',
        },
      },
    }),
  });

export const infoStyle = css({
  width: '5.2rem',

  color: theme.colors.gray_800,
  whiteSpace: 'nowrap',

  ...theme.text.body06,
});

export const inputStyle = css({
  border: 'none',

  background: 'transparent',

  outline: 'none',
});

export const plusBtnStyle = css({
  padding: '0.5rem',

  borderRadius: '0.6rem',

  backgroundColor: theme.colors.gray_100,

  '&:hover': {
    backgroundColor: theme.colors.gray_300,

    transition: 'all 0.2s ease-in',
  },
});

export const authorStyle = css({
  color: theme.colors.gray_800,

  outline: 'none',
  border: 'none',

  whiteSpace: 'nowrap',

  backgroundColor: theme.colors.gray_100,

  ...theme.text.body06,

  '::placeholder': {
    color: theme.colors.gray_800,
    ...theme.text.body06,
  },
});
