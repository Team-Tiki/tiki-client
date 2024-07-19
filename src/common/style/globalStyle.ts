import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const GlobalStyle = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Pretendard Variable', sans-serif;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  html,
  body {
    font-size: 62.5%;
  }

  ::-webkit-scrollbar {
    width: 0.8rem;
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.gray_300};
    border-radius: 10rem;
  }
  a {
    text-decoration: none;
  }
`;
