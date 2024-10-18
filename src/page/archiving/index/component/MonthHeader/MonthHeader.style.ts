import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

import { Block } from '@/page/archiving/index/type/blockType';

export const headerStyle = (blockSelected?: Block) =>
  css({
    display: 'flex',

    width: '100%',

    border: `2px solid ${theme.colors.gray_100}`,
    borderRadius: '8px',

    padding: '0.4rem',

    gap: blockSelected ? '2.4rem' : '4.4rem',
    transition: 'all 0.4s ease-in-out',
    backgroundColor: theme.colors.white,
  });

export const monthBtnStyle = css({
  padding: '1rem 1.2rem',

  color: theme.colors.black,
  backgroundColor: theme.colors.white,
  ...theme.text.body06,

  transition: 'all 0.4s ease-in-out',

  '&:hover': {
    color: theme.colors.key_500,
    backgroundColor: theme.colors.blue_100,
  },

  '&:focus': {
    color: theme.colors.key_500,
    backgroundColor: theme.colors.blue_100,
  },
});

export const currentMonthStyle = (isCurrent: boolean) =>
  isCurrent &&
  css({
    color: theme.colors.key_500,
    backgroundColor: theme.colors.blue_100,
  });
