import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const headerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  width: '100%',

  paddingBottom: '2rem',

  backgroundColor: theme.colors.white,

  '& h1': {
    padding: '1rem',

    ...theme.heading.heading05,
    fontWeight: 600,
  },
});
