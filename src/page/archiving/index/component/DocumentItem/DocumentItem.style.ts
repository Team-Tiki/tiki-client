import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = (selectedTabId: string) =>
  css({
    display: 'flex',
    flexDirection: 'column',

    gap: '0.4rem',
    padding: selectedTabId === 'total' ? '1rem 1.2rem' : '1.2rem',

    border: `1px solid ${theme.colors.gray_300}`,
    borderRadius: '8px',

    cursor: 'pointer',

    '&: hover': {
      backgroundColor: theme.colors.blue_100,
    },
  });

export const blockNameStyle = (color: string) =>
  css({
    display: 'inline-block',

    maxWidth: '21.8rem',
    padding: '0.2rem 0.4rem',

    borderRadius: '4px',
    backgroundColor: color,

    color: theme.colors.gray_800,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  });

export const documentNameStyle = css({
  width: '18rem',
  maxHeight: '2.8rem',

  alignSelf: 'center',
  color: theme.colors.gray_800,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
