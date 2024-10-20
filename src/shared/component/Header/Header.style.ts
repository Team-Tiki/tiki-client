import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const headerStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '2rem 3rem',

  '& > h1': {
    ...theme.heading.heading05,
    fontWeight: 600,
  },
});

export const settingIconStyle = css({
  '& > path': {
    fill: theme.colors.gray_800,
  },
});

export const iconStyle = css({
  width: '1.6rem',
  height: '1.6rem',

  cursor: 'pointer',
});

export const settingWrapperStyle = css({
  border: `1px solid ${theme.colors.gray_300}`,
  borderRadius: '8px',
});
