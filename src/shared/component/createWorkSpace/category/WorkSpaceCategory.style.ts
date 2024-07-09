import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const selectButtonStyle = (isOpen: boolean) =>
  css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: '1.2rem',
    color: theme.colors.gray_500,
    border: `1px solid ${isOpen ? theme.colors.blue_900 : theme.colors.gray_400}`,
    backgroundColor: 'white',
    borderRadius: '8px',
  });

export const selectedTextStyle = css({
  color: theme.colors.black,
});

export const arrowStyle = (isOpen: boolean) =>
  css({
    width: '1.2rem',
    height: '0.7rem',
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  });
