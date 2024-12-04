import { css } from '@emotion/react';
import { scrollStyle } from '@tiki/ui';

import { dashboradScrollStyle } from '@/page/dashboard/DashboardPage.style';

export const timelineContentStyle = css(
  {
    minHeight: '23.6rem',
    height: '23.6rem',

    padding: '0.6rem 0',

    borderRadius: '8px',
  },
  scrollStyle,
  dashboradScrollStyle
);
