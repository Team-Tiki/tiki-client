import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const sectionStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const backgroundStyle = css({
  width: '50.9rem',
  height: '40rem',

  marginTop: '2.4rem',

  backgroundColor: theme.colors.gray_200,
});
