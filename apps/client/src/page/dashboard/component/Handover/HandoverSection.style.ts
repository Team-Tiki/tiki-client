import { css } from '@emotion/react';
import { scrollStyle } from '@tiki/ui';

import { dashboradScrollStyle } from '@/page/dashboard/DashboardPage.style';

export const listItemStyle = css(
  {
    flexDirection: 'column',
    gap: '0.8rem',
    height: '100%',

    overflowY: 'scroll',
  },
  scrollStyle,
  dashboradScrollStyle
);
