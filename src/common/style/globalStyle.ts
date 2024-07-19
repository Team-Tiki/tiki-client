import { css } from '@emotion/react';

export const globalStyle = css({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    fontFamily: `'Pretendard Variable', sans-serif`,
  },

  'ul, ol, li': {
    listStyle: 'none',
  },

  'html, body': {
    fontSize: '62.5%',
    '&::-webkit-scrollbar': {
      width: '0rem',
    },
  },

  a: {
    textDecoration: 'none',
  },
});
