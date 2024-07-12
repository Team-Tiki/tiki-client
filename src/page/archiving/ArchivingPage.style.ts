import { BlockType } from '@/page/archiving/type/blockType';
import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const timelineStyle = (blockSelected: BlockType | undefined) =>
  css({
    position: 'relative',

    left: blockSelected ? '-5rem' : '5.2rem',
    padding: '1.2rem 13.2rem 6.2rem 0rem',

    flexDirection: 'column',
  });

export const pageStyle = (blockSelected: BlockType | undefined) =>
  css({
    width: blockSelected ? '89rem' : '100%',
    padding: '2.6rem 2.4rem',

    borderRadius: '16px',

    backgroundColor: theme.colors.gray_100,
  });

export const contentStyle = css({
  flexDirection: 'column',
  gap: '2rem',
});

export const daySectionStyle = (blockSelected: BlockType | undefined) =>
  css({
    position: 'relative',
    display: 'flex',

    width: blockSelected ? '84.2rem' : '104.6rem',
    height: '46.4rem',
    borderRadius: '6px',

    overflowX: 'scroll',

    scrollBehavior: 'smooth',

    '&::-webkit-scrollbar': {
      display: 'none',
    },
  });

export const buttonStyle = (blockSelected: BlockType | undefined) =>
  css({
    position: 'relative',
    width: '13.2rem',

    bottom: '3rem',

    marginLeft: 'auto',
    marginRight: blockSelected ? '30rem' : '0',

    borderRadius: '28px',

    ...theme.text.body04,
    boxShadow: '0px 2px 10px 0px rgba(70, 109, 235, 0.30)',

    '&:hover': {
      backgroundColor: theme.colors.blue_300,
    },
  });
