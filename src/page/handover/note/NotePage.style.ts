import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const noteSectionStyle = css({
  display: 'flex',

  padding: '1.6rem 1.6rem 0 1.6rem',

  gap: '2rem',

  border: `1px solid ${theme.colors.gray_300}`,
  borderRadius: '1.6rem',

  overflowY: 'scroll',
});

export const entireInfoStyle = css({
  display: 'flex',
  flexDirection: 'column',

  width: '33.9rem',
  height: '76.8rem',
  padding: '3.2rem 1.7rem 0 3.2rem',

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

  paddingBottom: '3.6rem',

  whiteSpace: 'nowrap',
});

export const infoStyle = css({
  width: '5.2rem',

  color: theme.colors.gray_800,
  whiteSpace: 'nowrap',
});

export const tagBoxStyle = css({
  display: 'flex',

  gap: '0.4rem',
});
