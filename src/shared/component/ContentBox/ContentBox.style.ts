import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const sectionStyle = css({
  width: '100%',

  padding: '1.6rem',

  border: `1px solid ${theme.colors.gray_300}`,
  borderRadius: '16px',
});

export const titleStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',

  ...theme.text.body04,
  fontWeight: 500,

  whiteSpace: 'nowrap',
});

export const headerStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  paddingBottom: '1.6rem',
});

export const contentOptionStyle = css({
  width: '100%',

  padding: '0.8rem 0',
});
