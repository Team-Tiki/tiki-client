import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  border: `1px solid ${theme.colors.gray_200}`,
  borderRadius: '100px',
});

export const leftContentStyle = css({
  borderRight: `1px solid ${theme.colors.gray_200}`,
});

export const rightContentStyle = css({});
