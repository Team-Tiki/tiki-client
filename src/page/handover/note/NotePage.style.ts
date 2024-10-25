import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const noteSectionStyle = css({
  display: 'flex',

  padding: '1.6rem 1.6rem 0 1.6rem',

  gap: '2rem',

  border: `1px solid ${theme.colors.gray_300}`,
  borderRadius: '1.6rem',
});

export const noteTitleStyle = css({
  display: 'flex',
  flexDirection: 'column',

  padding: '3.2rem 1.7rem 0 3.2rem',
});

export const tabButtonStyle = css({
  width: '8.9rem',

  ...theme.text.body06,
});
