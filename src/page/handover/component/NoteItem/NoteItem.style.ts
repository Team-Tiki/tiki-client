import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  display: 'grid',
  gridTemplateColumns: '25.3% 51.7% 11.6% 11.4%',

  width: '100%',
  margin: '1.6rem 0 ',
  minHeight: '1.8rem',

  '& *': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});

export const periodStyle = () =>
  css({
    width: '26rem',
  });

export const noteTitleStyle = css({
  width: '34rem',
});

export const profileStyle = css({
  width: '2.2rem',
  heigth: '2.2rem',

  borderRadius: '100%',
  backgroundColor: theme.colors.gray_300,
});

export const writerStyle = css({
  width: '10.4rem',
});

export const finishedStyle = (isFinished: boolean) =>
  css({
    padding: '0.4rem 0.8rem',
    borderRadius: '4px',
    width: isFinished ? '6.1rem' : '7.2rem',
    color: theme.colors.white,
    backgroundColor: isFinished ? theme.colors.key_400 : theme.colors.gray_300,
  });

export const moreButtonStyle = css({});
