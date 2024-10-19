import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

const baseRangeDateStyle = css({
  margin: '0.3rem 0',

  border: `1px solid ${theme.colors.key_500}`,
  borderTop: `1px solid ${theme.colors.key_500}`,
  borderBottom: `1px solid ${theme.colors.key_500}`,

  backgroundColor: theme.colors.key_100,
});

const baseSelectedDateStyle = css({
  marginBottom: '0.3rem',
  marginTop: '0.3rem',

  borderTop: `1px solid ${theme.colors.key_500}`,
  borderBottom: `1px solid ${theme.colors.key_500}`,

  backgroundColor: theme.colors.key_100,
});

export const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',

  position: 'absolute',
  top: 'calc(100% + 0.4rem)',
  left: 0,

  width: '25.6rem',

  padding: '1.6rem',

  border: `1px solid ${theme.colors.gray_300}`,
  borderRadius: '8px',

  backgroundColor: theme.colors.white,
});

export const dayStyle = css({
  padding: '0.8rem 0',

  color: theme.colors.key_600,
  fontWeight: 700,
});

export const datesContainerStyle = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',

  textAlign: 'center',
});

export const rangeDateStyle = css([
  baseRangeDateStyle,
  {
    borderLeft: 'none',
    borderRight: 'none',
    borderRadius: '0',
  },
]);

export const selectedStartDateStyle = css([
  baseSelectedDateStyle,
  {
    marginLeft: '0.3rem',
    marginRight: '0',

    borderLeft: `1px solid ${theme.colors.key_500}`,
    borderRight: 'none',

    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
    borderTopRightRadius: '0',
    borderBottomRightRadius: '0',
  },
]);

export const selectedEndDateStyle = css([
  baseSelectedDateStyle,
  {
    marginLeft: '0',
    marginRight: '0.3rem',

    borderRight: `1px solid ${theme.colors.key_500}`,
    borderLeft: 'none',

    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
  },
]);

export const dateStyle = css({
  justifyContent: 'center',
  alignContent: 'center',

  height: '2.6rem',

  margin: '0.3rem',

  borderRadius: '50%',
  border: 'none',

  color: theme.colors.gray_500,
  cursor: 'pointer',
});

export const selectedDateStyle = css({
  borderRadius: '50%',
  border: `1px solid ${theme.colors.key_500}`,

  backgroundColor: theme.colors.key_100,
});

export const hoverDateStyle = css({
  '&:hover, &:focus': {
    backgroundColor: theme.colors.gray_100,
  },
});
