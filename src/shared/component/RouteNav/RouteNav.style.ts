import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const iconFillActiveStyle = (isActive: boolean) =>
  css({
    '& > path': {
      fill: isActive ? theme.colors.gray_800 : theme.colors.gray_500,
    },
  });

export const iconStrokeActiveStyle = (isActive: boolean) =>
  css({
    '& > path': {
      stroke: isActive ? theme.colors.gray_800 : theme.colors.gray_500,
    },
  });

export const navListStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',

  width: 'max-content',

  padding: '0.4rem',

  borderRadius: '8px',
  backgroundColor: theme.colors.gray_100,
});

export const itemStyle = (isActive: boolean) =>
  css({
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',

    padding: '0.6rem 0.8rem',

    borderRadius: '4px',
    backgroundColor: isActive ? theme.colors.white : 'transparent',

    ...theme.text.body08,
    color: isActive ? theme.colors.black : theme.colors.gray_500,

    whiteSpace: 'nowrap',
  });
