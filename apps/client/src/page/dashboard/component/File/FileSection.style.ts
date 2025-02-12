import { css } from '@emotion/react';
import { scrollStyle, theme } from '@tiki/ui';

import { dashboradScrollStyle } from '@/page/dashboard/DashboardPage.style';

export const containerStyle = css(
  {
    gap: '1.4rem',
    padding: '0 0 0.7rem',
    overflowX: 'scroll',
    '&>*:hover': {
      backgroundColor: theme.colors.gray_100,

      transition: 'all ease 0.5s',
    },
  },
  scrollStyle,
  dashboradScrollStyle
);
