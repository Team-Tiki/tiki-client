import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const imageStyle = css({
  width: '100%',
  height: '14rem',
  borderRadius: '16px 16px 0px 0px',
});

export const descriptionStyle = css({
  display: 'flex',
  flexDirection: 'column',
  padding: '1.6rem',
  gap: '0.6rem',
});

export const titleStyle = css({
  ...theme.heading.heading06,
});

export const detailStyle = css({
  ...theme.text.body07,
  height: '3.4rem',
  overflow: 'hidden',
});
