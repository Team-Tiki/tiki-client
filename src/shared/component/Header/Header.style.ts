import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const headerStyle = css({
  width: 'fit-content',

  paddingBottom: '2rem',

  backgroundColor: theme.colors.white,

  '& > h1': {
    padding: '1rem',

    ...theme.heading.heading05,
    fontWeight: 600,
  },
});
