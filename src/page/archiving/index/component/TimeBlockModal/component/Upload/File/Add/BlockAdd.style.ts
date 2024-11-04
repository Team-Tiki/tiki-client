import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const boxStyle = css({
  borderRadius: '8px',
  border: `1px dashed ${theme.colors.gray_400}`,

  color: theme.colors.gray_500,
});

export const colorStyle = css({
  color: theme.colors.gray_800,
});

export const text1Style = css([
  colorStyle,
  {
    fontWeight: 500,
    marginTop: '1.2rem',
  },
]);

export const text2Style = css([
  colorStyle,
  {
    marginTop: '1.6rem',
  },
]);

export const text3Style = css([
  colorStyle,
  {
    marginTop: '0.5rem',
  },
]);
