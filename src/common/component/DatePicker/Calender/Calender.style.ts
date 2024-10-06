import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  border: `2px solid ${theme.colors.blue_200}`,
  padding: '2rem',
  borderRadius: '10px',
  backgroundColor: theme.colors.white,
});

export const monthDisplayStyle = css({
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
  fontSize: theme.text.body02.fontSize,
});

export const arrowContainerStyle = css({
  display: 'flex',
  gap: '8px',
});

export const iconStyle = css({
  width: '16px',
  height: '16px',
});

export const daysContainerStyle = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  textAlign: 'center',
});

export const dayStyle = css({
  padding: '8px 0',
  fontWeight: 'bold',
});

export const datesContainerStyle = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  textAlign: 'center',
});

export const dateStyle = css({
  padding: '8px',
  borderRadius: '50%',
  cursor: 'pointer',
});

export const outOfMonthStyle = css({
  color: theme.colors.gray_300,
});

export const selectedDateStyle = css({
  //backgroundColor: theme.colors.primary_200,
  color: '#FFFFFF',
});

export const hoverDateStyle = css({
  '&:hover': {
    backgroundColor: theme.colors.blue,
    color: theme.colors.blue,
  },
});
