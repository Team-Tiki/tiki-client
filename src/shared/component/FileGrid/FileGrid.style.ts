import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const cardStyle = css({
  width: '100%',
  height: '16rem',

  padding: '2.4rem 2rem',

  border: `1px solid ${theme.colors.gray_300}`,
  borderRadius: '12px',
});

export const iconWrapperStyle = css({
  width: '100%',

  padding: '1.2rem 0 2rem 0',
});

export const nameStyle = css({
  ...theme.text.body06,
  fontWeight: 500,
});

export const textStyle = css({
  ...theme.text.body08,

  color: theme.colors.gray_500,
});
