import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const handoverNoteItemStyle = () =>
  css({
    maxWidth: '20.6rem',
    padding: '0.6rem 1rem',

    border: `1px solid ${theme.colors.gray_300}`,
    borderRadius: '12px',

    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  });
