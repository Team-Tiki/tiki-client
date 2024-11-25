import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const scrollStyle = css`
  ::-webkit-scrollbar {
    width: 0.8rem;
    height: 0.8rem;
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.gray_300};
    border-radius: 10rem;
  }
`;
