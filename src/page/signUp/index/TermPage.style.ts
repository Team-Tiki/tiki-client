import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const detailStyle = css({
  position: 'relative',

  maxHeight: '14rem',

  padding: '1.6rem',
  paddingRight: '3.4rem',

  border: `1px solid ${theme.colors.gray_300}`,
  borderRadius: '8px',

  color: theme.colors.gray_800,
  fontWeight: '400',

  overflowY: 'scroll',

  whiteSpace: 'pre-line',

  /** 해당 컨텐트 위에 마우스 올리면 해당 요소만 스크롤 되게 함 */
  overscrollBehavior: 'contain',
});

export const buttonStyle = css({
  marginTop: '6rem',
});
