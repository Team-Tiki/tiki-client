import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const sectionStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const backgroundStyle = css({
  backgroundColor: theme.colors.gray_100,
});
