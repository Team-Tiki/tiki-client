import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = (wholeDocument: boolean) =>
  css({
    display: 'flex',
    flexDirection: 'column',

    gap: '0.4rem',
    padding: wholeDocument ? '1rem 1.2rem' : '1.2rem',

    border: '1px solid var(--gray_300, #D6D5D5)',
    borderRadius: '8px',
  });

export const blockNameTextStyle = (color: string) =>
  css({
    display: 'inline-block',
    padding: '0.2rem 0.4rem',

    borderRadius: '0.4rem',
    backgroundColor: theme.colors[color],
    color: theme.colors.gray_800,
  });

export const fileNameStyle = css({
  width: '18rem',

  alignSelf: 'center',

  color: theme.colors.gray_800,
});
