import { css } from '@emotion/react';

import { theme } from '@/common/style/theme/theme';

export const containerStyle = css({
  padding: '0 0 1.8rem 0',
  margin: '1.8rem 0 0 0 ',
  borderBottom: `1px solid ${theme.colors.gray_300}`,
});

export const periodStyle = (activeSelect: boolean) =>
  css({
    width: '26rem',
    marginRight: activeSelect ? '4.2rem' : 0,
    // paddingRight: activeSelect ? '3.4rem' : 0,
  });

export const noteTitleStyle = css({
  width: '34rem',
  marginRight: '27.6rem',
});

export const profileStyle = css({
  width: '2.2rem',
  heigth: '2.2rem',
  marginRight: '0.4rem',

  borderRadius: '100%',
  backgroundColor: theme.colors.gray_300,

  overflow: 'hidden',
});

export const writerStyle = css({
  width: '10.4rem',
  marginRight: '0.8rem',
});

export const finishedStyle = (isFinished: boolean) =>
  css({
    padding: '0.4rem 0.8rem',
    borderRadius: '4px',
    marginRight: isFinished ? '4.3rem' : '3.3rem',

    color: theme.colors.white,
    backgroundColor: isFinished ? theme.colors.key_400 : theme.colors.gray_300,
  });

export const moreButtonStyle = css({});
