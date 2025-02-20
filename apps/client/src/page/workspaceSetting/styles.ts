import { css } from '@emotion/react';
import { theme } from '@tiki/ui';

export const containerStyle = css({
  marginLeft: '1rem',
  marginTop: '4rem',
});

export const teamImageStyle = css({
  width: '6rem',
  height: '6rem',

  borderRadius: '10px',

  objectFit: 'cover',
});

export const teamImageTextStyle = css({
  color: theme.colors.gray_500,
});

export const workspaceDeleteButton = css({
  width: '11.4rem',

  margin: '4rem 0 0 1rem',
});
