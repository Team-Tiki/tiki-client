import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = (isOpen: boolean) =>
  css({
    display: 'none',
    padding: '0.4rem 0.8rem',

    backgroundColor: theme.colors.gray_100,
    border: `1px solid ${theme.colors.gray_300}`,
    borderRadius: '4px',
  });
