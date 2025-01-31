import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const uploadBoxStyle = (isDragover: boolean) =>
  css({
    display: 'flex',

    width: '100%',

    padding: '3.2rem',
    marginBottom: '2rem',

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: isDragover ? theme.colors.gray_100 : 'transparent',
  });

export const scrollBoxStyle = css({
  display: 'flex',
  flexDirection: 'column',

  maxHeight: '11rem',

  gap: '2rem',

  overflowY: 'auto',
});

export const boxStyle = css({
  borderRadius: '8px',
  border: `1px dashed ${theme.colors.gray_400}`,

  color: theme.colors.gray_800,
});

export const textStyle = css({
  color: theme.colors.gray_800,
});

export const buttonStyle = css({
  width: '16rem',

  color: theme.colors.gray_800,
});

export const imageStyle = css({
  width: '33.6rem',
  height: '33.6rem',

  objectFit: 'cover',

  borderRadius: '20px',
});
