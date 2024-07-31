import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const filterItemStyle = css({
  padding: '0.8rem',

  '&: hover': { color: theme.colors.blue_900 },
});
