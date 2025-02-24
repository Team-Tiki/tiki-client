import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const containerStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '100%',
  height: '4rem',

  padding: '1.2rem',

  backgroundColor: 'transparent',
  borderRadius: '8px',
  border: `1px solid ${theme.colors.gray_300}`,

  cursor: 'pointer',

  ':hover': {
    border: `1px solid ${theme.colors.key_500}`,
  },
});

export const iconStyle = (isSelected: boolean) =>
  css({
    '& > path': {
      fill: isSelected ? theme.colors.key_500 : theme.colors.gray_800,
    },
  });

export const termTextStyle = (isSelected: boolean) =>
  css({
    ...theme.text.body08,
    fontWeight: 500,

    color: isSelected ? theme.colors.black : theme.colors.gray_500,
  });

export const contentStyle = css({
  height: '37.8rem',

  overflowY: 'scroll',
});

export const expandButtonStyle = css({
  ...theme.text.body10,
  fontWeight: 500,

  borderRadius: '4px',
});
