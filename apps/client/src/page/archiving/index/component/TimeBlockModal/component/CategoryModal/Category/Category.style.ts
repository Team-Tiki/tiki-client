import { Theme, css } from '@emotion/react';

export const wrapperStyle = (color: string, isSelected: boolean) => (theme: Theme) =>
  css({
    display: 'flex',

    width: '10.8rem',
    height: '10rem',
    padding: '2rem 3.8rem',

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    gap: '1.6rem',

    borderRadius: '8px',
    border: 'none',

    backgroundColor: isSelected ? theme.colors?.[`${color}_100`] : theme.colors.gray_100,
    color: isSelected ? theme.colors?.[`${color}_200`] : theme.colors.gray_500,

    cursor: 'pointer',

    '& > svg': {
      '& > path': {
        fill: isSelected ? theme.colors?.[`${color}_200`] : theme.colors.gray_400,
      },
    },
  });
