import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = (selectedId: string) =>
  css({
    display: 'flex',
    flexDirection: 'column',

    gap: '0.4rem',
    padding: selectedId === 'total' ? '1rem 1.2rem' : '1.2rem',

    border: '1px solid var(--gray_300, #D6D5D5)',
    borderRadius: '8px',
  });

// 추후에 color 받아서 쓸거임 진짜임 지우라 하지마셈 반박불가
export const blockNameTextStyle = (color: string) =>
  css({
    display: 'inline-block',
    padding: '0.2rem 0.4rem',

    borderRadius: '0.4rem',
    backgroundColor: theme.colors.blue_100,
    color: theme.colors.gray_800,
  });

export const fileNameStyle = css({
  width: '18rem',

  alignSelf: 'center',

  color: theme.colors.gray_800,
});
