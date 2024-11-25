import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

const baseDateStyle = {
  borderTop: `1px solid ${theme.colors.key_500}`,
  borderBottom: `1px solid ${theme.colors.key_500}`,

  backgroundColor: theme.colors.key_100,
};

const selectedDateMargins = {
  marginBottom: '0.3rem',
  marginTop: '0.3rem',
};

export const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',

  position: 'absolute',
  top: 'calc(100% + 0.4rem)',
  left: 0,

  width: '25.6rem',

  zIndex: theme.zIndex.overlayMiddle,

  padding: '1.6rem',

  border: `1px solid ${theme.colors.gray_300}`,
  borderRadius: '8px',

  backgroundColor: theme.colors.white,
});

export const datesContainerStyle = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',

  textAlign: 'center',
});

export const rangeDateStyle = css({
  ...baseDateStyle,

  margin: '0.3rem 0',
  padding: '0.3rem 0',

  borderLeft: 'none',
  borderRight: 'none',
  borderRadius: '0',
});

export const selectedStartDateStyle = css({
  ...selectedDateMargins,
  ...baseDateStyle,

  marginLeft: '0.3rem',
  marginRight: '0',

  paddingRight: '0.3rem',

  borderLeft: `1px solid ${theme.colors.key_500}`,
  borderRight: 'none',
  borderTopLeftRadius: '50%',
  borderBottomLeftRadius: '50%',
  borderTopRightRadius: '0',
  borderBottomRightRadius: '0',
});

export const selectedEndDateStyle = css({
  ...selectedDateMargins,
  ...baseDateStyle,

  marginLeft: '0',
  marginRight: '0.3rem',

  paddingLeft: '0.3rem',

  borderRight: `1px solid ${theme.colors.key_500}`,
  borderLeft: 'none',
  borderTopRightRadius: '50%',
  borderBottomRightRadius: '50%',
  borderTopLeftRadius: '0',
  borderBottomLeftRadius: '0',
});

export const dateStyle = css({
  alignContent: 'center',

  height: '2.6rem',

  margin: '0.3rem',

  borderRadius: '50%',
  border: 'none',

  color: theme.colors.gray_600,
  cursor: 'pointer',
  ...theme.text.body08,
  fontWeight: 500,
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
