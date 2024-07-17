import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = (isOpen: boolean) =>
  css({
    display: `${isOpen ? '' : 'none'}`,
    padding: '0.4rem 0.8rem',
    gap: '0.4rem',

    border: `1px solid ${theme.colors.gray_300}`,
    borderRadius: '4px',

    backgroundColor: theme.colors.gray_100,

    whiteSpace: 'nowrap',

    boxShadow: '0 0.4rem 0.6rem 0 rgba(53, 63, 155, 0.15)',
  });

export const contentStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',

  border: 'none',

  backgroundColor: 'transparent',
});

export const textStyle = css({
  fontSize: '1.2rem',
  color: theme.colors.black,
});
