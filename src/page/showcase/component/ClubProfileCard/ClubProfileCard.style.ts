import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({ width: '100%' });

export const imageStyle = css({
  width: '100%',

  borderRadius: '16px 16px 0px 0px',

  objectFit: 'cover',
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
