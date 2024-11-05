import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = () =>
  css({
    width: '27rem',
    height: '100vh',

    borderLeft: `1px solid ${theme.colors.gray_300}`,
  });
