import { BlockType } from '@/page/archiving/type/blockType';
import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const timelineStyle = (isBlockSelected: BlockType | undefined) =>
  css({
    position: 'relative',

    left: isBlockSelected ? '-5rem' : '5.2rem',
    padding: '0rem 13.2rem 6.2rem 0rem',

    flexDirection: 'column',
  });

export const pageStyle = (isBlockSelected: BlockType | undefined) =>
  css({
    width: isBlockSelected ? '890px' : '100%',
    padding: '2.6rem 2.4rem',

    borderRadius: '16px',

    backgroundColor: theme.colors.gray_100,
  });

export const contentStyle = css({
  flexDirection: 'column',
  gap: '2rem',
});

export const daySectionStyle = (isBlockSelected: BlockType | undefined) =>
  css({
    position: 'relative',
    display: 'flex',

    width: isBlockSelected ? '84.2rem' : '104.6rem',
    height: '46.4rem',
    borderRadius: '6px',

    overflowX: 'scroll',

    scrollBehavior: 'smooth',

    '&::-webkit-scrollbar': {
      display: 'none',
    },
  });

export const buttonStyle = (isBlockSelected: BlockType | undefined) =>
  css({
    width: '13.2rem',

    marginLeft: 'auto',
    marginRight: isBlockSelected ? '30rem' : '0',

    borderRadius: '28px',

    ...theme.text.body04,
    boxShadow: '0px 2px 10px 0px rgba(70, 109, 235, 0.30)',

    '&:hover': {
      backgroundColor: theme.colors.blue_300,
    },
  });
