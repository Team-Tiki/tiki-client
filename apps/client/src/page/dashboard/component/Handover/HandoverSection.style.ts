import { css } from '@emotion/react';

import { scrollStyle } from '@/common/style/scroll';

import { dashboradScrollStyle } from '@/page/dashboard/DashboardPage.style';

export const listItemStyle = css(
  {
    flexDirection: 'column',
    gap: '0.8rem',
    padding: '0 0.4rem',
    height: '100%',

    overflowY: 'scroll',
  },
  scrollStyle,
  dashboradScrollStyle
);
