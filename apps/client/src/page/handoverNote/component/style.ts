import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const noteWrapperStyle = css({
  display: 'flex',

  maxHeight: 'calc(100vh - 33rem)',

  flexDirection: 'column',
  gap: '4rem',

  paddingBottom: '5rem',

  overflowY: 'scroll',
});

export const textareaStyle = css({
  width: '100%',
  height: '40.2rem',

  padding: '2.1rem 2rem 2.1rem 2rem',

  borderRadius: '1rem',
  border: `1px solid ${theme.colors.gray_300}`,

  resize: 'none',

  '&:focus': {
    boxShadow: theme.shadow.inset_focus,

    transition: '0.2s ease-in-out',

    outline: 'none',
  },
  '::placeholder': {
    color: theme.colors.gray_500,

    ...theme.text.body07,
  },
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

export const labelStyle = css({
  color: theme.colors.gray_800,
});

export const fileBoxStyle = css({
  display: 'flex',

  flexWrap: 'wrap',

  gap: '1.6rem',
});

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

  outline: 'none',
  border: 'none',

  color: theme.colors.gray_800,
  backgroundColor: theme.colors.gray_100,

  fontWeight: 500,
  ...theme.heading.heading03,
  lineHeight: '3.6rem',

  wordBreak: 'keep-all',
  resize: 'none',

  '::placeholder': {
    color: theme.colors.gray_500,
  },
});

export const infoContainerStyle = css({
  display: 'flex',

  flexDirection: 'column',
  gap: '0.4rem',

  marginTop: '3.6rem',
});

export const infoLayoutStyle = (isWrapped?: boolean) =>
  css({
    display: 'flex',

    minHeight: '4rem',

    gap: '2rem',
    alignItems: 'center',

    ...(isWrapped && {
      ':nth-of-type(3)': {
        '& > p': {
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

export const tagLayoutStyle = (isWrapped: boolean) =>
  css({
    display: 'flex',

    maxWidth: '21.8rem',

    marginBottom: isWrapped ? '1rem' : '',

    flexWrap: 'wrap',
    gap: '0.4rem',
  });

export const textBtnStyle = css({
  paddingLeft: '0',

  textDecoration: 'underline',

  ...theme.text.body06,
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
