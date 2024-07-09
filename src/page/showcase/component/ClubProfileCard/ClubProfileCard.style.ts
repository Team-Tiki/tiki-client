import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({ width: '24.35rem' });

export const imageStyle = css({
  width: '100%',
  height: '14rem',

  borderRadius: '16px 16px 0px 0px',

  objectFit: 'none',
  aspectRatio: 16 / 9,
});

export const descriptionStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',

  padding: '1.6rem',
});

export const titleStyle = css({
  ...theme.heading.heading06,
});

export const detailStyle = css({
  height: '3.4rem',

  ...theme.text.body07,

  overflow: 'hidden',
});
