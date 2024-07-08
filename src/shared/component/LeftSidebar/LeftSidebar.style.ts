import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const sidebarSectionStyle = css({
  position: 'fixed',

  left: '0',

  width: '26.5rem',
  height: '100vh',

  backgroundColor: theme.colors.gray_100,
  borderRadius: '0px 30px 30px 0px',
});
