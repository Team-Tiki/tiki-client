import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const noteSectionStyle = css({
  display: 'flex',

  padding: '1.6rem',

  justifyContent: 'space-evenly ',
  gap: '2rem',

  border: `1px solid ${theme.colors.gray_300}`,
  borderRadius: '1.6rem',

  overflowY: 'scroll',
});

export const entireInfoStyle = css({
  display: 'flex',
  flexDirection: 'column',

  width: '33.9rem',
  height: '60.8rem',
  padding: '3.2rem 1.7rem 3.2rem 3.2rem',

  borderRadius: '1.6rem 0 0 1.6rem',

  backgroundColor: theme.colors.gray_100,

  overflow: 'hidden',
});

export const tabButtonStyle = css({
  width: '8.9rem',

  ...theme.text.body06,
});

export const infoContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',

  gap: '1.6rem',
});

export const infoLayoutStyle = css({
  display: 'flex',

  gap: '2rem',

  alignItems: 'center',
});

export const titleStyle = css({
  color: theme.colors.gray_800,

  outline: 'none',
  border: 'none',

  whiteSpace: 'nowrap',

  backgroundColor: theme.colors.gray_100,

  marginBottom: '3.6rem',
  ...theme.heading.heading03,

  '::placeholder': {
    color: theme.colors.gray_800,
    ...theme.heading.heading03,
  },
});

export const infoStyle = css({
  width: '5.2rem',

  color: theme.colors.gray_800,
  whiteSpace: 'nowrap',
});

export const radioBoxStyle = css({
  '& > div': {
    display: 'flex',
    flexDirection: 'row',

    gap: '0.4rem',
  },
});
