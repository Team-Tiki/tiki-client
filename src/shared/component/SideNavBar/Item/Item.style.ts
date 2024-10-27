import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const itemStyle = (isClicked: boolean) =>
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '3.6rem',
    height: '3.6rem',
    padding: '0.1rem',

    backgroundColor: theme.colors.gray_100,
    borderRadius: '10px',
    border: isClicked ? `1px solid ${theme.colors.key_500}` : 0,

    cursor: 'pointer',
  });

export const indicatorStyle = css({
  position: 'absolute',
  left: 0,
});

export const firstSpellStyle = css({
  font: `${theme.text.body06}`,
  color: theme.colors.gray_500,
});
