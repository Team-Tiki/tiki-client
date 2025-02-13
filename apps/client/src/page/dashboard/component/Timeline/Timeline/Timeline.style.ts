import { css } from '@emotion/react';
import { scrollStyle } from '@tiki/ui';

import { dashboradScrollStyle } from '@/page/dashboard/DashboardPage.style';

export const timelineContentStyle = css(
  {
    minHeight: 'calc(100vh - 53rem)',
    height: 'calc(100vh - 53rem)',

    padding: '0.6rem 0',

    borderRadius: '8px',
  },
  scrollStyle,
  dashboradScrollStyle
);
