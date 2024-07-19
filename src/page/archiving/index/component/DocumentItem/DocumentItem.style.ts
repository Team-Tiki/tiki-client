import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = (selectedId: string) =>
  css({
    display: 'flex',
    flexDirection: 'column',

    gap: '0.4rem',
    padding: selectedId === 'total' ? '1rem 1.2rem' : '1.2rem',

    border: `1px solid ${theme.colors.gray_300}`,
    borderRadius: '8px',

    cursor: 'pointer',

    '&: hover': {
      backgroundColor: theme.colors.blue_100,
    },
  });

export const blockNameTextStyle = (color: string) =>
  css({
    display: 'inline-block',

    maxWidth: '21.8rem',
    padding: '0.2rem 0.4rem',

    borderRadius: '0.4rem',

    backgroundColor: color,
    color: theme.colors.gray_800,

    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  });

export const fileNameStyle = css({
  width: '18rem',
  maxHeight: '2.8rem',

  alignSelf: 'center',

  color: theme.colors.gray_800,

  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
